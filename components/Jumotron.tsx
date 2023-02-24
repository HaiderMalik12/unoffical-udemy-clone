'use client';

import { Container } from 'react-bootstrap';

const Jumbotron = (): JSX.Element => {
  return (
    <Container className="p-4">
      <h3>New to Udemy? Lucky you</h3>
      <p className="col-md-8 fs-4">
        Courses start at $13.99. Get your new-student offer before it expires.
      </p>
    </Container>
  );
};
export default Jumbotron;
