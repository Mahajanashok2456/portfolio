import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Client from '@/models/Client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const client = await Client.findById(id);
    if (!client) return NextResponse.json({ success: false, error: 'Client not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: client });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function PUT(req, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();
    const client = await Client.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!client) return NextResponse.json({ success: false, error: 'Client not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: client });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const { id } = await params;
    const client = await Client.findByIdAndDelete(id);
    if (!client) return NextResponse.json({ success: false, error: 'Client not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: client });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
