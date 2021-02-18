import React, { useContext, useState } from "react";
import Button from "../components/common/Button";
import styled from "styled-components";
import UserLoginSignUpTab from "../components/user/UserLoginSignUptab";
import bg from "../images/user/cakeBg.jpg";
import { getSignUp, getLogin } from "../utils/api.js";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { localAuthData } from "../utils/localStorage";
import AuthContext from "../contexts/AuthContext";

const SignUpPage = () => {
  const defaultData = {
    email: "",
    username: "",
    password: "",
  };

  const [signUpData, setSignUpData] = useState(defaultData);
  const { setAuthData } = useContext(AuthContext);
  const history = useHistory();

  const handleSignUpEmail = (e) => {
    setSignUpData({
      ...signUpData,
      email: e.target.value,
    });
  };

  const handleSignUpUserName = (e) => {
    setSignUpData({
      ...signUpData,
      username: e.target.value,
    });
  };

  const handleSignUpPassword = (e) => {
    setSignUpData({
      ...signUpData,
      password: e.target.value,
    });
  };

  const handleSignUp = () => {
    if (
      signUpData.username === "" ||
      signUpData.email === "" ||
      signUpData.password === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "All must be filled out",
        showConfirmButton: true,
      });
    } else {
      getSignUp(signUpData)
        .then((res) => {
          if (res.data.status === "success!") {
            Swal.fire({
              icon: "success",
              title: "You have signed up successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .then(() => {
          getLogin(signUpData.username, signUpData.password).then((res) => {
            localAuthData(res.data);
            setAuthData(res.data);
            history.push("/shop");
          });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "warning",
            title: error.response.data.detail,
          });
          setSignUpData(defaultData);
        });
    }
  };

  return (
    <StyledSignUpPage bg={bg}>
      <div className="container text-center">
        <UserLoginSignUpTab variant="signup-active" />

        <div className="inputs text-center pt-5 col-12 col-md-7 mx-auto">
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={handleSignUpEmail}
            value={signUpData.email}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Username"
            onChange={handleSignUpUserName}
            value={signUpData.username}
          />
          <input
            type="text"
            className="form-control mb-5"
            placeholder="Password"
            onChange={handleSignUpPassword}
            value={signUpData.password}
          />
        </div>
        <div onClick={handleSignUp}>
          <Button text="sign up" />
        </div>
      </div>
    </StyledSignUpPage>
  );
};

const StyledSignUpPage = styled.section`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  padding: 50px 0px;
  width: 100%;
  min-height: 90vh;
`;

export default SignUpPage;
