import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { BlogStatus } from '@prisma/client';

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { created_at: 'desc' },
      include: { user: { select: { name: true } } },
    });
    const formattedBlogs = blogs.map(blog => ({
      id: blog.id,
      title: blog.title,
      category: blog.category,
      created_at: blog.created_at.toISOString().split('T')[0],
      updated_at: blog.updated_at.toISOString().split('T')[0],
      status: blog.status,
      views: blog.views,
      content: blog.content,
      author: blog.user?.name,
    }));

    return NextResponse.json(formattedBlogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || !body.category || !body.content) {
      return NextResponse.json(
        { error: 'Title, category, and content are required' },
        { status: 400 }
      );
    }

    const status = (body.status as BlogStatus) || ('DRAFT' as BlogStatus);

    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        category: body.category,
        content: body.content,
        status: status,
        user_id: body.user_id,
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
