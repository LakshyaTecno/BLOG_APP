import React from "react";
import { Button, Container, TextField, Typography, Box } from "@mui/material";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";

const Login = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          LOGIN
        </Button>

        {/* Login with Google Button */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{ mt: 2 }}
        >
          Login with Google
        </Button>

        {/* Login with Facebook Button */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<FacebookIcon />}
          sx={{ mt: 2, color: "#1877F2", borderColor: "#1877F2" }}
        >
          Login with Facebook
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
