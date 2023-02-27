import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  // get the instance of prisma client
  const courses = await prisma.course.findMany();
  // find all the courses
  // send all the courses in the response
  return Response.json(courses);
}

// POST ENDPOINT

// PUT ENDPOINT
