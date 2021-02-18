import React, { useContext } from "react";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useOrderCompleted from "../hooks/useOrderCompleted";
import AuthContext from "../contexts/AuthContext";
import Loading from "../components/common/Loading";
import ErrorPage from "./ErrorPage";

const OrderCompletedPage = () => {
  const { authData } = useContext(AuthContext);
  const authToken = authData.access_token;
  const { loading, error } = useOrderCompleted(authToken);

  return (
    <StyledOrderCompletedPage>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
        <div className="container">
          <div className="text-center">
            <p className="f-lg-4xl mb-5">Congratulations!</p>
            <p className="f-lg-4xl mb-5">Your Order Was Successful!</p>
            <Link to="/shop/" className="text-center">
              <Button text="back to Shop" variant="primary" />
            </Link>
          </div>
        </div>
      )}
    </StyledOrderCompletedPage>
  );
};

const StyledOrderCompletedPage = styled.section`
  min-height: 80vh;
  padding: 100px 0px;
`;

export default OrderCompletedPage;
