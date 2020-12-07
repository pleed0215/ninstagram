import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useInput } from "../../utils/hooks";

import AuthPresenter from "./Presenter";
import { GqlCreateUser, GqlLogin } from "./Queries";

const AuthContainer = ({ isLogin = true }) => {
  const [action, setAction] = useState("logIn");
  const [login] = useMutation(GqlLogin, {
    onCompleted({ login }) {
      if (login.ok) {
      }
    },
  });
  const [createUser] = useMutation(GqlCreateUser);

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: {
          email: propsWillSend.emailInput.value,
          password: propsWillSend.passwordInput.value,
        },
      });
      if (!data || !data?.login?.ok) {
        toast.error(
          data ? data.login.error : "An error was occured while login."
        );
      } else {
        toast.success("Login success. Welcome!");
      }
    } catch (e) {
      toast.error("Log in failed due to some error occured");
    }
  };
  const onSignup = async (e) => {
    e.preventDefault();

    const { data } = await createUser({
      variables: {
        email: propsWillSend.emailInput.value,
        password: propsWillSend.passwordInput.value,
        username: propsWillSend.usernameInput.value,
        firstName: propsWillSend.firstNameInput.value,
        lastName: propsWillSend.lastNameInput.value,
      },
    });

    if (!data || !data?.createUser.ok) {
      toast.error(
        "Creating account failed. Due to password or duplicated account name."
      );
    } else {
      toast.success("Account created welcome");
    }
  };
  const propsWillSend = {
    action,
    setAction,
    emailInput: useInput(""),
    firstNameInput: useInput(""),
    lastNameInput: useInput(""),
    usernameInput: useInput(""),
    passwordInput: useInput(""),
    onLogin,
    onSignup,
  };

  return <AuthPresenter {...propsWillSend} />;
};

export default AuthContainer;
