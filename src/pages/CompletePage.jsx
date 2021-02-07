import React from "react";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CompletePage = () => {
  return (
    <StyledCompletePage>
      <div className="container">
        <div className="text-center">
          <p className="f-lg-4xl mb-5">Congratulations!</p>
          <p className="f-lg-4xl mb-5">Your Order Was Successful!</p>
          <Link to="/shop/">
            <Button text="back to Shop" variant="primary" />
          </Link>
        </div>
      </div>
    </StyledCompletePage>
  );
};

const StyledCompletePage = styled.section`
  height: 80vh;
  padding: 100px 0px;
`;

export default CompletePage;
