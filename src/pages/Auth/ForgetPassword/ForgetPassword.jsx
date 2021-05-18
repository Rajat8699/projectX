import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import "./ForgetPassword.scss";
import { Link } from "react-router-dom";

const ForgetPassword = () => {

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
            <h5>Forget Password</h5>
            <p>
            Please enter your Email of which you have forgotten Password.
            </p>
          </Row>
          <Form>
            <div className='py-3'>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            </div>
            <Button type="submit" variant="primary" size="sm" block>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ForgetPassword;
