import React, { useState } from "react";
import Button from "../components/common/Button";
import styled from "styled-components";
import UserLoginSignUpTab from "../components/user/UserLoginSignUptab";
import bg from "../images/user/cakeBg.jpg";

const LoginPage = () => {
  const defaultData = {
    account: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(defaultData);

  const handleAccountChange = (e) => {
    setLoginData({
      ...loginData,
      account: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setLoginData({
      ...loginData,
      password: e.target.value,
    });
  };

  return (
    <StyledLoginPage bg={bg}>
      <div className="container text-center">
        <UserLoginSignUpTab variant="login-active" />

        <div className="inputs text-center pt-5 col-12 col-md-7 mx-auto">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Username"
            onChange={handleAccountChange}
            value={loginData.account}
          />
          <input
            type="text"
            className="form-control mb-5"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={loginData.password}
          />
        </div>
        <Button text="login" />
      </div>
    </StyledLoginPage>
  );
};

const StyledLoginPage = styled.section`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  padding: 50px 0px;
  width: 100%;
  min-height: 90vh;
`;

export default LoginPage;
