import { NextRequest } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export async function GET(req: NextRequest) {
  try {
    const notices = await payload.find({
      collection: 'notices',
    });

    if (notices.docs.length === 0) {
      return Response.json({ message: 'No notices found' }, { status: 404 });
    }
    
    return Response.json({ data: notices.docs }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 500 });
    }
    return Response.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
