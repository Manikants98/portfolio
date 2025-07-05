import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const contributions = await prisma.contribution.findMany({
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    const formattedContributions = contributions.map(contribution => ({
      ...contribution,
      created_at: contribution.created_at.toISOString().split('T')[0],
      updated_at: contribution.updated_at.toISOString().split('T')[0],
      author: contribution.user?.name || 'Unknown',
    }));

    return NextResponse.json(formattedContributions);
  } catch (error) {
    console.error('Error fetching contributions:', error);
    return NextResponse.json({ error: 'Failed to fetch contributions' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, user_id } = body;

    const contribution = await prisma.contribution.create({
      data: {
        title,
        description,
        user_id,
      },
    });

    return NextResponse.json(contribution);
  } catch (error) {
    console.error('Error creating contribution:', error);
    return NextResponse.json({ error: 'Failed to create contribution' }, { status: 500 });
  }
}
