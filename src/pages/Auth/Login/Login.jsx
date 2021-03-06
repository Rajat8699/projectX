import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import "./Login.scss";
import { Link } from "react-router-dom";
import { getTests } from "../../../redux-toolkit/test1/testSlice";
import {FcGoogle} from 'react-icons/fc';
import { FaFacebookSquare } from "react-icons/fa";
import { facebookLogin, googleLogin, signInWithGoogle } from "../../../firebase/firebase";

const Login = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTests());
  }, []);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center auth-page"
    >
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Row>
            <h4>LOGO</h4>
          </Row>
          <Row>
            <h5>Welcome back!</h5>
            <p>
              Create an account? <Link to='/signup'>Sign up</Link>
            </p>
          </Row>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className='py-3'>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  size="sm" required/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Please enter email.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  size="sm" required/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter password.
            </Form.Control.Feedback>
            <Form.Text>
                <Link to='/forgot-password'>Forgot Password?</Link>
            </Form.Text>
            </Form.Group>
            </div>
            <Button type="submit" size="sm" block>
              Submit
            </Button>
            <Row className="py-2">
              <Col>
                <hr />
              </Col>
              <Col className="d-flex justify-content-center">
                <h6>OR</h6>
              </Col>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button size="sm" onClick={googleLogin} variant='light' className="shadow-sm"> Sign in with &nbsp;<FcGoogle/></Button>
              </Col>
              <Col>
                <Button  size="sm" onClick={facebookLogin} variant='secondary'> Sign in with <FaFacebookSquare/></Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
