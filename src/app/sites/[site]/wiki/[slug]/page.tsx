"use client";

import { use, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function WikiPage({ 
  params 
}: { 
  params: Promise<{ site: string, slug: string }> 
}) {
  const resolvedParams = use(params);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    // Pull from localStorage (the POC locker)
    const savedText = localStorage.getItem(resolvedParams.slug);
    if (savedText) {
      setContent(savedText);
    }
  }, [resolvedParams.slug]);

  // Transform the slug (explain-time-123) into a clean Title (EXPLAIN TIME)
  const cleanTitle = resolvedParams.slug.split('-').slice(0, -1).join(' ').toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumbs / Meta */}
        <nav className="text-xs font-mono text-gray-400 mb-4 uppercase tracking-widest">
          {resolvedParams.site} / Wiki / {resolvedParams.slug}
        </nav>

        <header className="mb-10">
          <h1 className="text-5xl font-black text-gray-900 border-b-4 border-gray-900 pb-4">
            {cleanTitle || "WIKI ARTICLE"}
          </h1>
        </header>

        {/* The Markdown Content Area */}
        {/* 'prose' is the magic Tailwind class that styles the markdown */}
        <article className="prose prose-lg max-w-none bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>

        <footer className="mt-12 text-center">
          <button 
            onClick={() => window.location.href = '/'}
            className="text-sm font-bold text-gray-900 hover:underline"
          >
            ← Generate Another
          </button>
        </footer>
      </div>
    </div>
  );
}