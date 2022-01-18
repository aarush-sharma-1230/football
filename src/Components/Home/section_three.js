import React from "react";
import { Link } from "react-router-dom";

const SectionThree = () => {
  return (
    <div className="padding-medium signin">
      <h2>Sign In now</h2>
      <p>Get personalized notifications and never miss a match again</p>
      <Link to="/">
        <button disabled>Sign In</button>
      </Link>
    </div>
  );
};

export default SectionThree;
