import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    const formattedBlog = {
      ...blog,
      created_at: blog.created_at.toISOString().split('T')[0],
      updated_at: blog.updated_at.toISOString().split('T')[0],
      author: blog.user?.name || 'Unknown',
    };
    return NextResponse.json(formattedBlog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const body = await request.json();
    const existingBlog = await prisma.blog.findUnique({
      where: { id },
    });
    if (!existingBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        title: body.title,
        category: body.category,
        content: body.content,
        status: body.status,
        ...(body.user_id && { user_id: body.user_id }),
      },
    });

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const existingBlog = await prisma.blog.findUnique({
      where: { id },
    });
    if (!existingBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    await prisma.blog.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
