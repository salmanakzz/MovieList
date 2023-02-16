import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link2 from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const theme = createTheme();

export const Signup = () => {
  const navigate = useNavigate();

  const [proffession, setProfession] = React.useState("");
  const [checkProf, setCheckProf] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (proffession.length < 1) {
      setCheckProf(true);
      return;
    }
    setCheckProf(false);

    if (data && proffession) {
      data.proffession = proffession;
      data.id = Math.floor(Math.random() * 1000000);

      let users = JSON.parse(localStorage.getItem("users"));

      if (users) {
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        localStorage.setItem("users", JSON.stringify([data]));
      }
      navigate("/");
    }
  };

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
          <Avatar sx={{ m: 1, bgcolor: "#1b79d7" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="!font-semibold" component="h1" variant="h5">
            Signup
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              type="text"
              {...register("name", {
                required: true,
              })}
            />
            {errors?.name?.type === "required" && (
              <p className="validate-error">This field is required</p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              {...register("email", {
                required: true,
                max: -1,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="validate-error">This field is required</p>
            )}
            {errors?.email?.type === "max" && (
              <p className="validate-error">Invalid email format</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className="validate-error">Invalid email format</p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
              {...register("phone", {
                required: true,
                pattern:
                  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                maxLength: 10,
              })}
            />
            {errors?.phone?.type === "required" && (
              <p className="validate-error">This field is required</p>
            )}
            {errors?.phone?.type === "pattern" && (
              <p className="validate-error">Invalid mobile number format</p>
            )}
            {errors?.phone?.type === "maxLength" && (
              <p className="validate-error">Number contains only 10 numbers</p>
            )}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Profession</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={proffession}
                label="profession"
                onChange={(e) => {
                  setProfession(e.target.value);
                  if (proffession.length < 1) {
                    setCheckProf(true);
                    return;
                  }
                  setCheckProf(false);
                }}
              >
                <MenuItem value={"Accountant"}>Accountant</MenuItem>
                <MenuItem value={"Author"}>Author</MenuItem>
                <MenuItem value={"Actor"}>Actor</MenuItem>
                <MenuItem value={"Actress"}>Actress</MenuItem>
              </Select>
            </FormControl>
            {checkProf && (
              <p className="validate-error">This field is required</p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", {
                required: true,
                min: 6,
                pattern:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
              })}
            />
            {errors?.password?.type === "required" && (
              <p className="validate-error">This field is required</p>
            )}
            {errors?.password?.type === "pattern" && (
              <p className="validate-error">
                Password must contain atleast one letter,number and a special
                character!
              </p>
            )}
            {errors?.password?.type === "min" && (
              <p className="validate-error">
                Password must have atleast 6 characters!
              </p>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/">
                  <Link2 variant="body2">
                    {"Already have an account? Login"}
                  </Link2>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
