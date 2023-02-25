'use client';

import { Col, Container, Row } from 'react-bootstrap';
import Vimeo from '@u-wave/react-vimeo';

const CourseDetails = (): JSX.Element => {
  return (
    <Container className="p-4">
      <Row>
        <Col>
          <h3>Web Development Masterclass & Certifications</h3>
          <p>
            HTML | CSS | JavaScript | Web programming | Web development |
            Front-end | Responsive | JQuery
          </p>
        </Col>
        <Col>
          <Vimeo video="802252358" />
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;
