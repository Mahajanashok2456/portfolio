import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: contacts });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const contact = await Contact.create(body);
    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
