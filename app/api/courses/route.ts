import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  // get the instance of prisma client
  const courses = await prisma.course.findMany();
  // find all the courses
  // send all the courses in the response
  return Response.json(courses);
}

// CREATE A NEW COURSES
export async function POST(request: Request) {
  // const topic = await prisma.topic.create({
  //   data: {
  //     title: 'Marketing',
  //     slug: 'marketing',
  //   },
  // });

  const course = await prisma.course.create({
    data: {
      title: 'Marketing masterclass',
      desc: 'Learn marketing step by step',
      slug: 'marketing-masterclass',
      promo: '12333',
      outcomes: [
        'Prepare for Industry Certification Exam',
        'Earn Certification that is Proof of your Competence',
        'outcome 3',
        'outcome 4',
        'outcome 5',
      ],
      topicId: 1,
      sections: {
        create: [
          {
            title: 'section 1',
            desc: 'Learn nodejs fundamentals',
            sectionOnVideos: {
              create: [
                {
                  video: {
                    create: {
                      title: 'install node',
                      vimeoId: '123123',
                    },
                  },
                },
                {
                  video: {
                    create: {
                      title: 'setup node server',
                      vimeoId: '1231233',
                    },
                  },
                },
              ],
            },
          },
          {
            title: 'section 2',
            desc: 'Learn next.js fundamentals',

            sectionOnVideos: {
              create: [
                {
                  video: {
                    create: {
                      title: 'setup express',
                      vimeoId: '3332',
                    },
                  },
                },
                {
                  video: {
                    create: {
                      title: 'create midleware',
                      vimeoId: '333233',
                    },
                  },
                },
                {
                  video: {
                    create: {
                      title: 'add JSON Web token',
                      vimeoId: '433233',
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
  return Response.json(course);
}
