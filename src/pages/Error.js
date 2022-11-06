import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <h1>You have reached a dead end!</h1>
      <Link to="/">
        <button className="btn">Back Home</button>
      </Link>
    </div>
  );
}

export default Error;
