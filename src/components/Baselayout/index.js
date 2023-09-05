import React from "react";
import Header from "../Header";

const Baselayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Baselayout;
