'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface ApiResponse {
  tenantSlug?: string;
  text?: string;   // Add this line so we can access the AI content
  error?: string;
}

export default function WikiGeneratorForm() {
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleGenerate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-wiki', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      
      const data = (await response.json()) as ApiResponse;
      
      if (data.tenantSlug && data.text) {
        // --- THE HACK ---
        // Save the AI text in the browser's memory using the slug as a key
        localStorage.setItem(data.tenantSlug, data.text);
        
        // Pushes to the relative path, maintaining the current VPS custom domain
        router.push(`/wiki/${data.tenantSlug}`);
      } else if (data.error) {
        setError(data.error);
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleGenerate} className="flex flex-col gap-4 w-full">
      <input 
        type="text" 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        placeholder="e.g., Explain the core concepts of Next.js"
        required
        className="w-full p-4 text-lg border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800"
        disabled={isLoading}
      />
      <button 
        type="submit" 
        disabled={isLoading}
        className="w-full p-4 text-lg font-bold text-white bg-gray-900 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? 'Consulting Gemini...' : 'Generate Wiki'}
      </button>
      
      {error && (
        <p className="text-red-500 mt-2 font-medium">{error}</p>
      )}
    </form>
  );
}