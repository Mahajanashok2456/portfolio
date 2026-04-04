import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Testimonial from '@/models/Testimonial';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);

  try {
    await connectDB();
    let query = {};
    if (!session) {
      // For public users, only show approved testimonials
      query = { isApproved: true };
    }
    const testimonials = await Testimonial.find(query).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: testimonials });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const testimonial = await Testimonial.create(body);
    return NextResponse.json({ success: true, data: testimonial }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
