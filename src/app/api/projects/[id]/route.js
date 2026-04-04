import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Project from '@/models/Project';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const project = await Project.findById(id);
    if (!project) return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: project });
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
    const project = await Project.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!project) return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: project });
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
    const project = await Project.findByIdAndDelete(id);
    if (!project) return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: project });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
