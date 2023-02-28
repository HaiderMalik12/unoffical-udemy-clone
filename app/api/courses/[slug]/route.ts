// we have to create a new route to fetch data on the based on course

import prisma from '@/lib/prisma';

// we need dynamic route
export async function GET(request, { params }) {
  const slug = params.slug;

  // find course on the based on slug
  const course = await prisma.course.findUnique({
    where: { slug },
    include: {
      topic: true,
      sections: {
        include: {
          sectionOnVideos: {
            include: {
              video: true,
            },
          },
        },
      },
    },
  });
  // include sections
  // include videos
  // include topic
  return Response.json(course);
}
