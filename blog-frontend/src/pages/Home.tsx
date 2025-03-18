import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container
      maxWidth="md"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to right, #2193b0, #6dd5ed)",
        color: "white",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to BlogApp
      </Typography>
      <div>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
        >
          LOGIN
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: "10px" }}
          component={Link}
          to="/signup"
        >
          SIGNUP
        </Button>
      </div>
    </Container>
  );
};

export default HomePage;
