import React from "react";
import { Button, Container, TextField, Typography, Box } from "@mui/material";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";

const Signup = () => {
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
          Signup
        </Typography>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          SIGNUP
        </Button>

        {/* Signup with Google Button */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{ mt: 2 }}
        >
          Signup with Google
        </Button>

        {/* Signup with Facebook Button */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<FacebookIcon />}
          sx={{ mt: 2, color: "#1877F2", borderColor: "#1877F2" }}
        >
          Signup with Facebook
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
