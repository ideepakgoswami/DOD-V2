import { NextResponse } from 'next/server';
import { put, head } from '@vercel/blob';

export async function GET() {
  try {
    const { url } = await head('events.json', { token: process.env.BLOB_READ_WRITE_TOKEN });
    // fetch with a timestamp query param to bypass Vercel Edge Cache internally
    const response = await fetch(url + '?t=' + Date.now()); 
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // If the blob doesn't exist yet, fallback to the local JSON file
    console.log("Blob 'events.json' not found, falling back to local file.");
    const fs = await import('fs/promises');
    const path = await import('path');
    try {
      const filePath = path.join(process.cwd(), 'src/data/events.json');
      const fileContents = await fs.readFile(filePath, 'utf8');
      return NextResponse.json(JSON.parse(fileContents));
    } catch (e) {
      return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    await put('events.json', JSON.stringify(data), { 
      access: 'public',
      contentType: 'application/json',
      addRandomSuffix: false,
      allowOverwrite: true,
      token: process.env.BLOB_READ_WRITE_TOKEN
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error writing to Vercel Blob:', error);
    return NextResponse.json({ error: 'Failed to write data' }, { status: 500 });
  }
}
