import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useAuth } from "../../auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill the details");
    }

    auth.login(email);
    navigate("/");
  };

  return (
    <>
      <Container>
        <h1 className="display-6 mb-4 mt-5">Login</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              data-testid="email-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter passwrod"
              data-testid="password-input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary me-2"
            type="submit"
            data-testid="submit-btn"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Link to="/">
            <Button variant="danger" type="button" data-testid="cancel-btn">
              Cancel
            </Button>
          </Link>
        </Form>
      </Container>
    </>
  );
};

export default Login;
