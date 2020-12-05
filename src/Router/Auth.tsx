import React, { useState } from "react";
import Footer from "../Components/Footer";

const Auth: React.FC = () => {
  const [action, setAction] = useState("logIn");
  return (
    <>
      <div className="w-1/2 h-4/5 mx-auto flex items-center justify-center">
        <h1 className="p-4 mx-auto">
          {action === "logIn" ? "Login" : "SignUp"}
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
