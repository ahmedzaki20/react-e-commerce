import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../store/slices/profile";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function LogIn() {
  const sign = useSelector((state) => state.signUp);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(sign);
  }, [sign]);
  // handel sgin in alets
  const signInAlert = (name) => {
    Swal.fire({
      icon: "success",
      title: `Welcome ${name}`,
      text: "You sgin in to shopping cart app",
    });
  };
  const wrongEmail = (name) => {
    Swal.fire({
      icon: "error",
      title: `Wrong Email`,
      text: "Make sure that you use the same email you sign up with",
    });
  };
  const wrongPassword = () => {
    Swal.fire({
      icon: "error",
      title: `Wrong password`,
      text: "Make sure that you are not useing Caps or wrong password",
    });
  };
  const handler = () => {
    if (sign.some((profile) => profile.email === userName)) {
      console.log(userName);
      if (
        sign.find((profile) => profile.email === userName).password === password
      ) {
        const user = sign.find((profile) => profile.email === userName);
        const profile = {
          email: user.email,
          password: user.password,
          name: user.username,
        };
        signInAlert(profile.name);
        dispatch(logIn(profile));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        wrongPassword();
      }
    } else {
      wrongEmail();
    }
  };

  return (
    <Container className="pt-5">
      <Form
        className="mt-5 p-3 "
        onSubmit={(e) => {
          e.preventDefault();
          handler();
        }}
      >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
        <Form.Text className="link">
          <Link to="/sign-up">Dont have an account </Link>
        </Form.Text>
        <Button
          variant="primary"
          className="d-block m-auto"
          size=""
          type="submit"
        >
          Log In
        </Button>{" "}
      </Form>
    </Container>
  );
}
export default LogIn;
