import Image from 'next/image';
import Link from 'next/link';

export function Categories() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link href="/topic/marketing">
            <Image
              src="/images/market.jpeg"
              alt="Marketing Category"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="col">
          <Link href="/topic/business">
            <Image
              src="/images/business.jpeg"
              alt="Business Category "
              width={200}
              height={200}
            />
          </Link>
        </div>

        <div className="col">
          <Link href="/topic/design">
            <Image
              src="/images/design.jpeg"
              alt="Design Category "
              width={200}
              height={200}
            />
          </Link>
        </div>

        <div className="col">
          <Link href="/topic/development">
            <Image
              src="/images/development.jpeg"
              alt="Development Category "
              width={200}
              height={200}
            />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link href="/topic/it-and-software">
            <Image
              src="/images/it-and-software.jpeg"
              alt="IT and Software Category "
              width={200}
              height={200}
            />
          </Link>
        </div>

        <div className="col">
          <Link href="/topic/music">
            <Image
              src="/images/music.jpeg"
              alt="Music Category "
              width={200}
              height={200}
            />
          </Link>
        </div>

        <div className="col">
          <Link href="/topic/personal">
            <Image
              src="/images/personal-dev.jpeg"
              alt="Personal Development Category "
              width={200}
              height={200}
            />
          </Link>
        </div>

        <div className="col">
          <Link href="/topic/photography">
            <Image
              src="/images/photography.jpeg"
              alt="Photography Category "
              width={200}
              height={200}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
