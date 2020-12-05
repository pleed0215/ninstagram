import React from "react";
import GlobalRouter from "./Router";
import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const App: React.FunctionComponent = () => {
  const {
    loading,
    error,
    data: { isLoggedIn },
  } = useQuery(QUERY);

  if (loading) {
    return (
      <div>
        <h1>Fetching Now...</h1>
      </div>
    );
  } else {
    console.log(isLoggedIn);
    return <GlobalRouter isLoggedIn={isLoggedIn} />;
  }
};

export default App;
