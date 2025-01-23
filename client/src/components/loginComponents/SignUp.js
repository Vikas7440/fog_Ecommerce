import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  SignUpContainer,
  Title,
  FormWrapper,
  StyledForm,
  InputField,
  SubmitButton,
  Separator,
  FooterText,
} from "./styles";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const answer = "India";

  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    if (password !== cnfpassword) {
      return toast.error("Password doesn't Match");
    }
    if (role !== 1 || role !== 0) {
      return toast.error("Please use 0 for user in Role section");
    }
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
          role,
        }
      );
      console.log(res.data);
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/loginSignUp");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Try Again");
    }
  }

  return (
    <SignUpContainer>
      <Title>Sign Up</Title>
      <ToastContainer />
      <FormWrapper>
        <StyledForm onSubmit={onSubmit}>
          <InputField
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
          />
          <InputField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <InputField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <InputField
            value={cnfpassword}
            onChange={(e) => setCnfpassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            required
          />
          <InputField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone Number"
            required
          />
          <InputField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Address"
            required
          />
          <InputField
            value={role}
            onChange={(e) => setRole(e.target.value)}
            type="text"
            placeholder="ROLE (for User '0' , for Admin '1')"
            required
          />
          <SubmitButton type="submit">Sign up</SubmitButton>
        </StyledForm>
        <Separator>or</Separator>
        <FooterText>
          Already have an account? <Link to="/loginSignup">Log In</Link>
        </FooterText>
      </FormWrapper>
    </SignUpContainer>
  );
}

export default SignUp;
