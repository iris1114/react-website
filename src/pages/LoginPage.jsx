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
  const [error, setError] = useState(null);

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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLoginClick();
    }
  };

  const handleLoginClick = () => {
    if (loginData.username === "" || loginData.password === "") {
      Swal.fire({
        icon: "warning",
        title: "All must be filled out",
        showConfirmButton: true,
      });
    } else {
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
          console.log({ error });

          Swal.fire({
            icon: "warning",
            title: error.response.data.detail,
          });
          if (error.response.status === 408) {
            setError("passError");
            setLoginData({
              ...loginData,
              password: "",
            });
          } else if (error.response.status === 406) {
            setError("usernameError");
            setLoginData(defaultData);
          }
        });
    }
  };

  return (
    <StyledLoginPage
      bg={bg}
      variant={
        error === "usernameError"
          ? "usernameError"
          : error === "passError"
          ? "passError"
          : null
      }
    >
      <div className="container text-center">
        <div className="text-center">
          <UserLoginSignUpTab variant="login-active" />
          <div className="inputs text-center pt-5 col-12 col-md-7 mx-auto">
            <input
              type="text"
              className="form-control mb-3 username-input"
              placeholder="Username"
              onChange={handleUsernameChange}
              value={loginData.username}
              onFocus={() => {
                setError(null);
              }}
              onKeyPress={handleKeyPress}
            />
            <input
              type="password"
              className="form-control mb-5 password-input"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={loginData.password}
              onFocus={() => {
                setError(null);
              }}
              onKeyPress={handleKeyPress}
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

  .username-input {
    border: ${(props) =>
      props.variant === "usernameError" ? "1px solid red" : "none"};
  }
  .password-input {
    border: ${(props) =>
      props.variant === "passError" ? "1px solid red" : "none"};
  }
`;

export default LoginPage;
