import { Course } from '@prisma/client';
import { CourseCard } from './CourseCard';
import _ from 'lodash';

type CoursesProps = {
  courses: Course[];
};

export function Courses({ courses }: CoursesProps) {
  const results = _.chunk(courses, 3);
  console.log(results);
  return (
    <>
      <div className="container">
        {results.map((courses, i) => (
          <div className="row" key={i}>
            {courses.map((course) => (
              <div className="col" key={course.id}>
                <CourseCard course={course} />
              </div>
            ))}
            {/* <div className="p-3"></div> */}
          </div>
        ))}
      </div>
    </>
  );
}
