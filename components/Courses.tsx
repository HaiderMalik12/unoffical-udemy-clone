'use client';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

const Courses = () => {
  return (
    <Container className="p-4">
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/courses/sample.svg" />
            <Card.Body>
              <Card.Title>Build APis with Node.js</Card.Title>
              <Card.Text>
                Step by step guide to build APis with Node.js
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/courses/sample.svg" />
            <Card.Body>
              <Card.Title>Learn Angular</Card.Title>
              <Card.Text>
                Step by step guide to build frontend with Angular
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/courses/sample.svg" />
            <Card.Body>
              <Card.Title>Vue.js Development</Card.Title>
              <Card.Text>
                Step by Step guide to build frontend with Vue.js
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
