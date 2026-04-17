import { NextRequest, NextResponse } from 'next/server';
import { generateText } from 'ai';
// Use the standard Google provider, NOT Vertex
import { createGoogleGenerativeAI } from '@ai-sdk/google';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) return NextResponse.json({ error: 'No prompt' }, { status: 400 });

    // Initialize the standard provider
    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    const { text } = await generateText({
      // Hits the Generative Language API, not the blocked Vertex endpoint
      model: google('gemini-2.5-flash'), 
      system: 'You are an expert wiki generator. Respond ONLY in Markdown formatting.',
      prompt: `Create a comprehensive wiki page about: ${prompt}`,
    });

    const tenantSlug = `${prompt.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`;

    return NextResponse.json({ tenantSlug, text, status: 'success' });

  } catch (error: any) {
    console.error("GENERATION ERROR:", error.message);
    return NextResponse.json({ error: 'Generation Failed', detail: error.message }, { status: 500 });
  }
}