import { CourseCard } from './CourseCard';

export function Courses() {
  return (
    <div className="container p-4">
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
