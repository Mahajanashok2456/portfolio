import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Skill from '@/models/Skill';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  try {
    await connectDB();
    const skills = await Skill.find({}).sort({ createdAt: 1 });
    return NextResponse.json({ success: true, data: skills });
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
    const skill = await Skill.create(body);
    return NextResponse.json({ success: true, data: skill }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
