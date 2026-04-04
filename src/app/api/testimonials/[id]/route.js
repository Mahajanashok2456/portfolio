import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Testimonial from '@/models/Testimonial';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function PUT(req, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();
    const testimonial = await Testimonial.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!testimonial) return NextResponse.json({ success: false, error: 'Testimonial not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: testimonial });
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
    const testimonial = await Testimonial.findByIdAndDelete(id);
    if (!testimonial) return NextResponse.json({ success: false, error: 'Testimonial not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: testimonial });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
