import React from "react";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal m-10"
        type="email"
        placeholder="jane@example.com"
      ></input>
    </div>
  );
};

export default App;
