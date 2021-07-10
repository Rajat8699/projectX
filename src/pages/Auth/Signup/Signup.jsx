import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Row, Button, Card, Col } from "react-bootstrap";
import "./Signup.scss";
import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc';
import { FaFacebookSquare } from "react-icons/fa";
import { googleLogin,facebookLogin } from "../../../firebase/firebase";

const SignUp = () => {
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
            <h5>Welcome to Dash</h5>
            <p>
              Already have an account? <Link to="/">Sign in</Link>
            </p>
          </Row>
          <Form>
            <Row className="py-2 g-2">
              <Col md>
              <Form.Group controlId="formBasicFirstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" size='sm'/>
              </Form.Group>
              </Col>
              <Col md>
              <Form.Group controlId="formBasicLastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" size='sm'/>
              </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail" className="py-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" size='sm'/>
            </Form.Group>
            <Row className="py-2 g-2">
              <Col md>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" size='sm'/>
              </Form.Group>
              </Col>
              <Col md>
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" size='sm'/>
              </Form.Group>
              </Col>
            </Row>
            <Button
              type="submit"
              size="sm"
              block
              className="mt-3"
            >
              Submit
            </Button>
          </Form>
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
                <Button onClick={googleLogin} variant='light' className="shadow-sm"><FcGoogle/> Sign in with Google</Button>
              </Col>
              <Col>
                <Button onClick={facebookLogin} variant='info'><FaFacebookSquare/> Sign in with Facebook</Button>
              </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignUp;
