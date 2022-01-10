import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener"
      >
        たくや
      </Link>
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn({ setName }) {
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState("");
  console.log({ disabled, string });

  useEffect(() => {
    const disabled = string === "";
    setDisabled(disabled);
  }, [string]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            ようこそ
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ニックネーム"
              name="name"
              autoFocus
              onChange={(e) => setString(e.target.value)}
              onKeyDown={(e) => {
                console.log(e.target.value);
                if (e.key === "Enter") {
                  e.preventDefault();
                  setName(e.target.value);
                }
              }}
            />
            <Button
              disabled={disabled}
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                setName(string);
              }}
            >
              はじめる
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
