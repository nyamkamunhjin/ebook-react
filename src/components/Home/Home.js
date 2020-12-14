import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Container>
      <Col md={3}>
        <Form>
          <Form.Group controlId="formBasicSearch">
            <Form.Label>Search</Form.Label>
            <Form.Control type="text" placeholder="Book name" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Sort" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Col>
      <Col md={9}></Col>
    </Container>
  );
};

export default Home;
