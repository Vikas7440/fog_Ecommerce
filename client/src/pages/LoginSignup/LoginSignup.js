import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../context/auth.js";

import {
  LoginContainer,
  Title,
  FormWrapper,
  StyledForm,
  InputField,
  SubmitButton,
  Separator,
  //AdminCredentials,
  FooterText,
} from "./styles";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));

        if (res.data.user.role) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

    // ((userCredential) => {
    //   const user = userCredential.user;

    //   // Check if the user is admin
    //   if (user.email === "admin@gmail.com") {
    //     navigate("/AdminPanel"); // Navigate to admin panel
    //   } else {
    //     navigate("/"); // Navigate to normal user dashboard
    //   }

    //   console.log("Login successful");
    // }).catch((error) => {
    //   const errorMessage = error.message;
    //   console.error(errorMessage);
    // });
  }

  return (
    <LoginContainer>
      <Title>Log In</Title>
      <ToastContainer />
      <FormWrapper>
        <StyledForm onSubmit={onSubmit}>
          <InputField
            value={email}
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            value={password}
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit">Log In</SubmitButton>
        </StyledForm>
        <Separator>or</Separator>
        <div className="text-center">
          <FooterText>
            Don't have an account?{" "}
            <Link className="underline text-lg" to="/signup">
              Sign Up
            </Link>
          </FooterText>
        </div>
      </FormWrapper>
      {/* <AdminCredentials>
        <h2>Admin Credentials:</h2>
        <p>
          Email: <span>admin@gmail.com</span>
        </p>
        <p>
          Password: <span>123456</span>
        </p>
      </AdminCredentials> */}
    </LoginContainer>
  );
}

export default LoginForm;
