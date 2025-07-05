import { prisma } from '@/lib/prisma';
import userSchema from '@/schemas/user';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function GET() {
  const users = await prisma.user.findMany();
  const safeUsers = users.map(({ password, ...user }) => user);
  return NextResponse.json(safeUsers);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = userSchema.parse(body);
    const hashedPassword = await bcrypt.hash(validated.password, 10);
    const user = await prisma.user.create({
      data: {
        ...validated,
        password: hashedPassword,
      },
    });
    const { password, ...safeUser } = user;
    return NextResponse.json(safeUser, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map(e => e.message) }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
