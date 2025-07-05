import { prisma } from '@/lib/prisma';
import userSchema from '@/schemas/user';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
  const { password, ...safeUser } = user;
  return NextResponse.json(safeUser);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const validated = userSchema.partial().parse(body);
    if (validated.password) {
      validated.password = await bcrypt.hash(validated.password, 10);
    }
    const user = await prisma.user.update({
      where: { id: params.id },
      data: validated,
    });
    const { password, ...safeUser } = user;
    return NextResponse.json(safeUser);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map(e => e.message) }, { status: 400 });
    }
    return NextResponse.json({ error: 'Update failed' }, { status: 400 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.user.delete({ where: { id: params.id } });
    return NextResponse.json({ message: 'User deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 400 });
  }
}
