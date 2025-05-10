import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');

  if (!file) {
    return NextResponse.json({ error: 'File parameter is required' }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'app', 'markdowns', `${file}.md`);

  try {
    const markdown = await fs.readFile(filePath, 'utf-8');
    return NextResponse.json(markdown);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read markdown file' }, { status: 500 });
  }
}
