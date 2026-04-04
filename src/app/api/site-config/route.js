import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import SiteConfig from '@/models/SiteConfig';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const section = searchParams.get('section');

    if (section) {
      const config = await SiteConfig.findOne({ section });
      return NextResponse.json({ success: true, data: config?.content || null });
    }

    const configs = await SiteConfig.find({});
    const data = configs.reduce((acc, curr) => {
      acc[curr.section] = curr.content;
      return acc;
    }, {});
    return NextResponse.json({ success: true, data });
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
    const { section, content } = await req.json();
    const config = await SiteConfig.findOneAndUpdate(
      { section },
      { content },
      { upsert: true, new: true, runValidators: true }
    );
    return NextResponse.json({ success: true, data: config });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
