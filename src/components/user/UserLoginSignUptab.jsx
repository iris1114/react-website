import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../utils/styles";

const UserLoginSignUpTab = ({ variant }) => {
  return (
    <StyledUserLoginSignUpTab>
      <div className={`d-flex justify-content-center ${variant}`}>
        <Link to="/login">
          <p className="login-text mr-4 f-lg-xl">Login</p>
        </Link>
        <Link to="/signup">
          <p className="signup-text f-lg-xl">Register</p>
        </Link>
      </div>
    </StyledUserLoginSignUpTab>
  );
};

const StyledUserLoginSignUpTab = styled.div`
  p {
    color: ${COLOR.lightBrown};
  }
  .login-active {
    .login-text {
      color: ${COLOR.nude};
      border-bottom: 1px solid ${COLOR.nude};
    }
  }
  .signup-active {
    .signup-text {
      color: ${COLOR.nude};
      border-bottom: 1px solid ${COLOR.nude};
    }
  }
`;

export default UserLoginSignUpTab;
