import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NavBar from "../components/Navbar/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../state/authSlice";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  console.log(user)

  useEffect(() => {
    if(user) {
      if (user.role === "user") navigate("/catalogue");
      else if (user.role === "admin") navigate("/catalogue");
    }
  }, [navigate, user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData);

    try {
      dispatch(logIn(formProps));
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div>
      <NavBar />
      <div className="login-container">
        <Container className="mt-48" component="main" maxWidth="sm" data-aos="fade-up" data-aos-delay="500">
          <Box
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              px: 4,
              py: 6,
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        {/* <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
      </div>
    </div>
  );
}