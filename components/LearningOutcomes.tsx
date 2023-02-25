'use client';

import { Card, Col, Container, Row, ListGroupItem } from 'react-bootstrap';

const LearningOutcomes = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Title className="p-2">What you will learn</Card.Title>
            <Card.Body>
              <Row>
                <Col>
                  <ListGroupItem>
                    Prepare for Industry Certification Exam
                  </ListGroupItem>
                  <ListGroupItem>
                    Earn Certification that is Proof of your Competence
                  </ListGroupItem>
                  <ListGroupItem>
                    Hours and Hours of Video Instruction
                  </ListGroupItem>
                  <ListGroupItem>
                    Hours and Hours of Video Instruction
                  </ListGroupItem>
                </Col>
                <Col>
                  <ListGroupItem>Over 25 Engaging Lab Exercises</ListGroupItem>
                  <ListGroupItem>
                    Instructor Available by Email or on the Forums
                  </ListGroupItem>
                  <ListGroupItem>
                    Prepare for Industry Certification Exam
                  </ListGroupItem>
                  <ListGroupItem>
                    Comprehensive Coverage of HTML and CSS
                  </ListGroupItem>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LearningOutcomes;
