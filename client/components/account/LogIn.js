import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import facebookIcon from "../../assets/icons/facebook-icon.png";
import googleIcon from "../../assets/icons/google-icon.png";
import classes from "../../styles/account/LogIn.module.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPasswordClick = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className={classes.container}>
      <div className={classes["inner-container"]}>
        <Card className={classes["login-container"]}>
          <CardHeader className={classes.header} title="Login" />
          <CardContent className={classes.content}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <div className={classes["email-wrapper"]}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className={classes.email}
                />
              </div>
              <div className={classes["password-wrapper"]}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  className={classes.password}
                />
                <IconButton
                  onClick={handleShowPasswordClick}
                  className={classes.eye}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    right: "0.6rem",
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
              <div className={classes["login-options"]}>
                <p>Log in with phone number?</p>
                <p>Forgot your password?</p>
              </div>
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
                disableElevation
                sx={{
                  color: "#fff",
                  backgroundColor: "#de89a1",
                  borderRadius: "8px",

                  padding: "0.8em 1em",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                Log in
              </Button>
            </form>

            <Divider className={classes.divider}>
              <p>OR</p>
            </Divider>

            <div className={classes["social-media-buttons-wrapper"]}>
              <Button
                className={classes["facebook-button"]}
                sx={{
                  border: "1px solid hsl(0, 0%, 80%)",
                  color: "#545454",
                  textTransform: "uppercase",
                  width: "45%",
                }}
              >
                <Image src={facebookIcon} alt="facebook icon" loading="lazy" />
                <span>Facebook</span>
              </Button>
              <Button
                className={classes["google-button"]}
                sx={{
                  border: "1px solid hsl(0, 0%, 80%)",
                  color: "#545454",
                  textTransform: "uppercase",
                  width: "45%",
                }}
              >
                <Image src={googleIcon} alt="google icon" loading="lazy" />
                <span>Google</span>
              </Button>
            </div>

            <div className={classes.toogle}>
              Do not have an account?
              <Link href="/signup">
                <span>Sign Up</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
