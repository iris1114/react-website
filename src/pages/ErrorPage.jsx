import React from "react";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <StyledErrorPage>
      <div className="container">
        <div className="text-center">
          <p className="f-lg-4xl mb-5">Somethings wrong!</p>
          <Link to="/">
            <Button text="back to Homepage" variant="primary" />
          </Link>
        </div>
      </div>
    </StyledErrorPage>
  );
};

const StyledErrorPage = styled.section`
  height: 80vh;
  padding: 100px 0px;
`;

export default ErrorPage;
