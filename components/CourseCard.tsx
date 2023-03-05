import { Course } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

type CourseCardProps = {
  course: Course;
};
export function CourseCard({ course }: CourseCardProps): JSX.Element {
  console.log(course);
  return (
    <div className="card">
      <Image
        className="card-img-top"
        src="/images/courses/sample.svg"
        alt="Card image cap"
        width={300}
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title">{course?.title}</h5>
        <p className="card-text">{course?.desc}</p>
        <Link href="/" className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
}
