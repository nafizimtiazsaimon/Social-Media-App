import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  Segment,
  Button,
  Icon,
  Divider,
  Message,
} from "semantic-ui-react";
import {
  HeaderMessage,
  FooterMessage,
} from "../components/Common/WelcomeMessage";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const [showPassword, setShowPassword] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    const isUser = Object.values({ email, password }).every((item) =>
      Boolean(item)
    );
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <HeaderMessage />
      <Form
        loading={formLoading}
        error={errorMsg == null}
        onSubmit={handleSubmit}
      >
        <Message
          error
          header="Oops!"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />
        <Form.Input
          required
          label="Email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          fluid
          icon="envelope"
          iconPosition="left"
          type="email"
        />
        <Form.Input
          label="Password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
          fluid
          icon={{
            name: "eye",
            circular: true,
            link: true,
            onClick: () => setShowPassword(!showPassword),
          }}
          iconPosition="left"
          type={showPassword ? "text" : "password"}
          required
        />
        <Divider hidden />
        <Button
          icon="signup"
          content="Login"
          type="submit"
          color="orange"
          disabled={submitDisabled}
        />
        <Segment />
      </Form>
      <FooterMessage />
    </>
  );
}

export default Login;
