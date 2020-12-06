import React from "react";
import { useInput, UseInput } from "../../utils/hooks";
import { ImFacebook2 } from "react-icons/im";

const LoginForm = ({ emailInput, passwordInput }) => {
  return (
    <>
      <input
        type="email"
        className="form__auth_input"
        placeholder="Email address"
        required={true}
        {...emailInput}
      />
      <input
        className="form__auth_input"
        type="password"
        placeholder="Password"
        required={true}
        {...passwordInput}
      />
      <input type="submit" value="Login" className="form__auth_submit" />
    </>
  );
};

const SignupForm = ({
  emailInput,
  firstNameInput,
  lastNameInput,
  passwordInput,
  usernameInput,
}) => {
  return (
    <>
      <input
        type="email"
        className="form__auth_input"
        placeholder="Email address"
        required={true}
        {...emailInput}
      />
      <input
        type="text"
        className="form__auth_input"
        placeholder="First name"
        required={true}
        {...firstNameInput}
      />
      <input
        type="text"
        className="form__auth_input"
        placeholder="Last name"
        required={true}
        {...lastNameInput}
      />
      <input
        type="text"
        className="form__auth_input"
        placeholder="username"
        required={true}
        {...usernameInput}
      />
      <input
        className="form__auth_input"
        type="password"
        placeholder="Password"
        required={true}
        {...passwordInput}
      />
      <input type="submit" value="Signup" className="form__auth_submit" />
    </>
  );
};

const AuthPresenter = ({
  action,
  setAction,
  emailInput,
  passwordInput,
  lastNameInput,
  firstNameInput,
  usernameInput,
  onLogin,
  onSignup,
}) => {
  const signupInput = {
    emailInput,
    passwordInput,
    lastNameInput,
    firstNameInput,
    usernameInput,
    onSignup,
  };
  const loginInput = { emailInput, passwordInput, onLogin };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/3 min-h-1/2 h-auto min-h-half justify-center items-center box-border bg-white">
        <div className="w-full min-w-max h-5/6 mb-2 border border-gray-500 p-10 overflow-y-auto">
          <h1 className="text-center font-amarillo font-semibold text-3xl text-black">
            Ninstagram
          </h1>
          <form
            className="w-full h-auto flex flex-col mt-8"
            onSubmit={action === "logIn" ? onLogin : onSignup}
          >
            {action === "logIn" ? (
              <LoginForm {...loginInput} />
            ) : (
              <SignupForm {...signupInput} />
            )}
          </form>
          <div className="w-full h-auto flex justify-center items-center my-4">
            <div className="border-t border-gray-400 w-full mx-2" />
            <span className="text-gray-400">or</span>
            <div className="border-t border-gray-400 w-full mx-2" />
          </div>
          <div className="w-full h-auto flex flex-col justify-center items-center text-lg">
            <div className="w-full flex justify-center items-center mb-4">
              <ImFacebook2 className="text-blue-900 mr-2" />
              <span className="text-blue-900">Log in with facebook</span>
            </div>
            <div className="w-full flex justify-center items-center">
              <p className="text-blue-900">Forgot password?</p>
            </div>
          </div>
        </div>
        <div className="w-full h-1/6 border border-gray-500 p-4 flex justify-center items-center">
          <p className="text-center text-lg">
            <span className="mr-2">
              {action === "logIn"
                ? "Don't have account?"
                : "Do you have account?"}
            </span>
            <a
              href="#"
              className="text-blue-800 cursor-pointer"
              onClick={() => setAction(action === "logIn" ? "signUp" : "logIn")}
            >
              {action === "logIn" ? "Sign Up" : "Log In"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPresenter;
