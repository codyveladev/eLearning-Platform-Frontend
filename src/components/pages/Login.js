import React, { useEffect } from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../actions/userActions";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  
  const history = useHistory();

  useEffect(() => {
    if (userInfo) {
      history.push("/main-page");
    }
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    dispatch(login(data.userName, data.password))
  };

  return (
    <div>
      <Container>
        <h2 className="display-4 text-center pt-4">Log In</h2>
        <Container className="d-flex justify-content-center pt-3">
          <div className="border shadow-sm py-4 px-5">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Row>
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
                </Row>
                <Row>
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
