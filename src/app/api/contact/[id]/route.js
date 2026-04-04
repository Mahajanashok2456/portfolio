import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const { id } = await params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) return NextResponse.json({ success: false, error: 'Contact not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
