import Image from 'next/image';
import Link from 'next/link';

export function CourseCard() {
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
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <Link href="/" className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
}
