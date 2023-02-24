'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Col, Container, Row } from 'react-bootstrap';

const Categories = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Link href="/">
            <Image
              src="/images/market.jpeg"
              alt="Marketing Category"
              width={200}
              height={200}
            />
          </Link>
        </Col>
        <Col>
          <Link href="/business">
            <Image
              src="/images/business.jpeg"
              alt="Business Category "
              width={200}
              height={200}
            />
          </Link>
        </Col>

        <Col>
          <Link href="/design">
            <Image
              src="/images/design.jpeg"
              alt="Design Category "
              width={200}
              height={200}
            />
          </Link>
        </Col>

        <Col>
          <Link href="/development">
            <Image
              src="/images/development.jpeg"
              alt="Development Category "
              width={200}
              height={200}
            />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link href="/it-and-software">
            <Image
              src="/images/it-and-software.jpeg"
              alt="IT and Software Category "
              width={200}
              height={200}
            />
          </Link>
        </Col>

        <Col>
          <Link href="/music">
            <Image
              src="/images/music.jpeg"
              alt="Music Category "
              width={200}
              height={200}
            />
          </Link>
        </Col>

        <Col>
          <Link href="/personal">
            <Image
              src="/images/personal-dev.jpeg"
              alt="Personal Development Category "
              width={200}
              height={200}
            />
          </Link>
        </Col>

        <Col>
          <Link href="/photography">
            <Image
              src="/images/photography.jpeg"
              alt="Photography Category "
              width={200}
              height={200}
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
