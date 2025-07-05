import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { SkillStatus } from '@prisma/client';

export async function GET() {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });

    const formattedSkills = skills.map(skill => ({
      ...skill,
      created_at: skill.created_at.toISOString().split('T')[0],
      updated_at: skill.updated_at.toISOString().split('T')[0],
    }));

    return NextResponse.json(formattedSkills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, description, level, status } = body;

    const skill = await prisma.skill.create({
      data: {
        title,
        category,
        description,
        level,
        status: (status as SkillStatus) || 'DRAFT',
      },
    });

    return NextResponse.json(skill);
  } catch (error) {
    console.error('Error creating skill:', error);
    return NextResponse.json({ error: 'Failed to create skill' }, { status: 500 });
  }
}
