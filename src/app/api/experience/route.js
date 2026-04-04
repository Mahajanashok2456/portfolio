import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Experience from '@/models/Experience';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  try {
    await connectDB();
    const experiences = await Experience.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: experiences });
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
    const experience = await Experience.create(body);
    return NextResponse.json({ success: true, data: experience }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
