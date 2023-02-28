// we have to create a new route to fetch data on the based on course

import prisma from '@/lib/prisma';

// we need dynamic route
export async function GET(request, { params }) {
  const slug = params.slug;

  // find course on the based on slug
  const courses = await prisma.topic.findUnique({
    where: {
      slug,
    },
    include: {
      courses: true,
    },
  });

  return Response.json(courses);
}
