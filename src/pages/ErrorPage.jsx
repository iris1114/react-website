import React from "react";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="text-center">
        <p className="f-lg-4xl mb-5">Somethings wrong!</p>
        <Link to="/">
          <Button text="back to Homepage" variant="primary" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
