'use client';

import { Col, Container, Row, Card, Button } from 'react-bootstrap';
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
          <Card>
            <Card.Body>
              <Vimeo video="785538329" />
              <h2>$15</h2>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;
