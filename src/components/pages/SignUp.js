import React, { useState } from "react";
import "../../App.css";
import { Container, Form, Col, Row, Button, Alert, Breadcrumb } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
const axios = require("axios");

export default function SignUp() {
  //Used for the form | View docs -> https://react-hook-form.com/get-started
  const { register, handleSubmit, errors } = useForm();
  
  //Used for setting the error message, could probably combine msg and msgVariant
  const [msg, setMsg] = useState({ heading: "", body: "" });
  const [msgVariant, setMsgVariant] = useState("");
  const [showError, setShowError] = useState(false);
  
  //Used for redirecting, Successful Registration -> Login Page
  const history = useHistory();

  const onSubmit = async (data, e) => {
    //Verify the passwords match
    if (data.password !== data.confirmPassword) {
      //Render the error message
      setMsgVariant("danger");
      setMsg({ heading: "Error!", body: "Passwords do not match..." });
      setShowError(true);

      //Hide message after three seconds.
      setTimeout(() => setShowError(false), 3000);
      return;
    } else {
      //Drop the second password
      delete data.confirmPassword;
      try {
        //Make a post request to the API to register the user
        let res = await axios.post(
          "http://localhost:8080/api/users/register",
          data
        );
        //Display success message
        setMsgVariant("success");
        setMsg({ heading: "Success!", body: "Successfully Registered!" });
        setShowError(true);

        //Redirect the user to the login page after two seconds.
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      } catch (error) {
        if (error) {
          //Handle the error message.
          setMsgVariant("danger");
          setMsg({ heading: "Error!", body: error.response.data });
          setShowError(true);

          //Hide the message after three seconds.
          setTimeout(() => setShowError(false), 3000);
          return;
        }
      }
    }
  };

  return (
    <div className="form-bg">
      <Container className="bg-white border">
        <Breadcrumb fluid>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Sign-up</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="display-4 text-center pt-3">Sign Up</h2>
        {/* Error message  */}
        {showError ? (
          <div className="d-flex justify-content-center">
            <Alert className="py-3 px-5" variant={msgVariant}>
              <Alert.Heading>{msg.heading}</Alert.Heading>
              <p className="text-lead text-center">{msg.body}</p>
            </Alert>
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        {/* Start of form */}
        <Container className="d-flex justify-content-center py-3">
          <div className="border shadow-sm py-4 px-5">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control
                      name="firstName"
                      size="md"
                      ref={register({ required: true })}
                      type="text"
                    ></Form.Control>
                    {errors.firstName && (
                      <span className="text-danger">Firstname required!</span>
                    )}
                  </Col>
                  <Col>
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control
                      name="lastName"
                      size="md"
                      ref={register({ required: true })}
                      type="text"
                    ></Form.Control>
                    {errors.lastName && (
                      <span className="text-danger">Lastname required!</span>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      size="md"
                      ref={register({ required: true })}
                      name="userName"
                      type="text"
                    ></Form.Control>
                    {errors.userName && (
                      <span className="text-danger">Username required!</span>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      size="md"
                      ref={register({ required: true })}
                      type="email"
                    ></Form.Control>
                    {errors.email && (
                      <span className="text-danger">Email required!</span>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      size="md"
                      ref={register({ required: true })}
                      type="password"
                    ></Form.Control>
                    {errors.password && (
                      <span className="text-danger">Passsword required!</span>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      name="confirmPassword"
                      size="md"
                      ref={register({ required: true })}
                      type="password"
                    ></Form.Control>
                    {errors.confirmPassword && (
                      <span className="text-danger">Confirm Password!</span>
                    )}
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
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </Container>
    </div>
  );
}
