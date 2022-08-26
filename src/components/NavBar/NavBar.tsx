import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useAuth } from "../../auth";

const NavBar: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Container className="navbar d-flex justify-content-space-between mb-5">
      <h1 className="display-6 ms-2">My Posts</h1>
      <div>
        <Link to="/create">
          <Button variant="success me-2">Create Post</Button>
        </Link>
        {isLoggedIn && (
          <Button variant="danger ms-2" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>
    </Container>
  );
};

export default NavBar;
