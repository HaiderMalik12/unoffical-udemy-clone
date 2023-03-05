import { Course } from '@prisma/client';
import { CourseCard } from './CourseCard';

type CoursesProps = {
  courses: Course[];
};

export function Courses({ courses }: CoursesProps) {
  return (
    <div className="container p-4">
      {/* Render course here by using map function */}
      {/* How many rows are required, how many columns */}
      {/* If we will have 12 records in the database how can you add logic to render 4 rows and inside a row 3 cols */}
      {/* If we have 16 records in the database, I want you to think about we have to display the 3 cols */}
      <div className="row">
        <div className="col">
          <CourseCard />
        </div>
        <div className="col">
          <CourseCard />
        </div>
        <div className="col">
          <CourseCard />
        </div>
      </div>
    </div>
  );
}
