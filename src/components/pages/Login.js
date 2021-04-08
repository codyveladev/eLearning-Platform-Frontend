import React from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Container>
        <h2 className="display-4 text-center pt-4">Log In</h2>
        <Container className="d-flex justify-content-center pt-3">
          <div className="border shadow-sm py-4 px-5">
            <Form>
              <Form.Group>
                <Row>
                  <Form.Label>Username</Form.Label>
                  <Form.Control size="lg" type="text"></Form.Control>
                </Row>
                <Row>
                  <Form.Label>Password</Form.Label>
                  <Form.Control size="lg" type="password"></Form.Control>
                </Row>
                <Row className="pt-3">
                  <Button className="px-4" variant="primary" type="submit">
                    Log In
                  </Button>
                </Row>
              </Form.Group>
            </Form>
          </div>
        </Container>
        <p className="text-center font-weight-light pt-3">
          Need an account? <Link to="/sign-up">Register now</Link>
        </p>
      </Container>
    </div>
  );
}