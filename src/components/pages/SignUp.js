import React, { useState } from "react";
import "../../App.css";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Container fluid className="pb-5">
      <h2 className="display-4 text-center pt-3">Sign Up</h2>
      <Container className="d-flex justify-content-center py-3">
        <div className="border shadow-sm py-3 px-5">
          <Form>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control
                    name="firstName"
                    size="sm"
                    type="text"
                    value={data.firstName}
                    onChange={handleChange}
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Lastname</Form.Label>
                  <Form.Control
                    name="lastName"
                    size="sm"
                    type="text"
                    value={data.lastName}
                    onChange={handleChange}
                  ></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Username</Form.Label>
                  <Form.Control size="sm" type="text"></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control size="sm" type="email"></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Password</Form.Label>
                  <Form.Control size="sm" type="password"></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control size="sm" type="password"></Form.Control>
                </Col>
              </Row>
              <Row className="pt-3">
                <Col>
                  <Button className="px-4" variant="primary" type="submit">
                    Register
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </div>
      </Container>
      <p className="text-center font-weight-light">
        Already have an account? <Link to='/login'>Login here</Link>
      </p>
    </Container>
  );
}
