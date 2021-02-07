import React, { useState } from "react";
import Button from "../components/common/Button";
import styled from "styled-components";
import UserLoginSignUpTab from "../components/user/UserLoginSignUptab";
import bg from "../images/user/cakeBg.jpg";
import { getLogin } from "../utils/api.js";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const defaultData = {
    username: "",
    password: "",
  };

  const history = useHistory();

  const [loginData, setLoginData] = useState(defaultData);

  const handleUsernameChange = (e) => {
    setLoginData({
      ...loginData,
      username: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setLoginData({
      ...loginData,
      password: e.target.value,
    });
  };

  console.log(loginData);

  const handleLoginClick = () => {
    getLogin(loginData.username, loginData.password)
      .then((res) => {
        console.log(res);
        if (res.data.access_token) {
          Swal.fire({
            icon: "success",
            title: "You have successfully Logged In",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        history.push("/shop");
      })
      .catch((error) => {
        Swal.fire({
          icon: "warning",
          title: error.response.data.detail,
        });
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
            onChange={handleUsernameChange}
            value={loginData.username}
          />
          <input
            type="text"
            className="form-control mb-5"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={loginData.password}
          />
        </div>
        <div onClick={handleLoginClick}>
          <Button text="login" />
        </div>
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
