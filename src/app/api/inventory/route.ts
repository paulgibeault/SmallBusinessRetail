// src/app/api/inventory/route.ts
import { getAllTreats, getTreatById, createTreat, Treat } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const treats = await getAllTreats();
  return NextResponse.json(treats);
}

export async function POST(request: Request) {
    try {
      const data: Omit<Treat, 'id'> = await request.json();
      const newTreat = await createTreat(data);
      return NextResponse.json(newTreat, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }
  }