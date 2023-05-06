import React from "react";
import spinner from "../assets/images/spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
    </div>
  );
};

export default Loader;
