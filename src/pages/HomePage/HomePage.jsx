import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTests } from "../../redux-toolkit/test1/testSlice";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import "./homepage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTests());
  }, []);

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
              Create an account?<Link>Sign up</Link>
            </p>
          </Row>
          <Form>
            <div className='py-3'>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            </div>
            <Button type="submit" variant="primary" size="sm" block>
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
                <Button size="sm">Google</Button>
              </Col>
              <Col>
                <Button size="sm">Facebook</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HomePage;
