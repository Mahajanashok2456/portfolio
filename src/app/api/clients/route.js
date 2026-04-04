import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Client from '@/models/Client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  try {
    await connectDB();
    const clients = await Client.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: clients });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await req.json();
    const client = await Client.create(body);
    return NextResponse.json({ success: true, data: client }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
