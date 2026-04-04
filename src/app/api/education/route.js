import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Education from '@/models/Education';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  try {
    await connectDB();
    const education = await Education.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: education });
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
    const education = await Education.create(body);
    return NextResponse.json({ success: true, data: education }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
