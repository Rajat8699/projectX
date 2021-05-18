import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Row, Button, Card, Col } from "react-bootstrap";
import "./Signup.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center auth-page"
    >
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Row>
            <h4>LOGO</h4>
          </Row>
          <Row>
            <h5>Welcome to Dash</h5>
            <p>
              Already have an account?<Link to="/">Sign in</Link>
            </p>
          </Row>
          <Form>
            <Row>
              <Form.Group as={Col} controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
            </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
            </Row>
            <Button
              type="submit"
              variant="primary"
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
              <Button size="sm">Google</Button>
            </Col>
            <Col>
              <Button size="sm">Facebook</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignUp;
