import React, { useContext, useState } from "react";
import Button from "../components/common/Button";
import styled from "styled-components";
import UserLoginSignUpTab from "../components/user/UserLoginSignUptab";
import bg from "../images/user/cakeBg.jpg";
import { getLogin } from "../utils/api.js";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { localAuthData } from "../utils/localStorage";

const LoginPage = () => {
  const defaultData = {
    username: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(defaultData);
  const { setAuthData } = useContext(AuthContext);
  const history = useHistory();

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

  const handleLoginClick = () => {
    getLogin(loginData.username, loginData.password)
      .then((res) => {
        localAuthData(res.data);
        setAuthData(res.data);
        if (res.data.access_token) {
          Swal.fire({
            icon: "success",
            title: "You have successfully Logged In",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        if (history.pathname === "/login") {
          history.push("/shop");
        } else {
          history.goBack();
        }
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
        <div className="text-center">
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
              type="password"
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
