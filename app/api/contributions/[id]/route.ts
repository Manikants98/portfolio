import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { title, description } = body;

    const contribution = await prisma.contribution.update({
      where: {
        id: params.id,
      },
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(contribution);
  } catch (error) {
    console.error('Error updating contribution:', error);
    return NextResponse.json({ error: 'Failed to update contribution' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.contribution.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ message: 'Contribution deleted successfully' });
  } catch (error) {
    console.error('Error deleting contribution:', error);
    return NextResponse.json({ error: 'Failed to delete contribution' }, { status: 500 });
  }
}
