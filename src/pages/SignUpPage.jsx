import React, { useState } from "react";
import Button from "../components/common/Button";
import styled from "styled-components";
import UserLoginSignUpTab from "../components/user/UserLoginSignUptab";
import bg from "../images/user/cakeBg.jpg";

const SignUpPage = () => {
  const defaultData = {
    email: "",
    username: "",
    password: "",
  };
  const [signUpData, setSignUpData] = useState(defaultData);

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
    //     getSignUp(signUpData)
    //       .then((res) => {
    //         if (res.data.code === "SUCCESS") {
    //           history.push(`users/`); // 需取得userId
    //         } else {
    //           alert(`message: ${res.data.message}`);
    //           setSignUpData(defaultData);
    //         }
    //       })
    //       .catch((error) => {
    //         alert(error.data.message);
    //       });
  };

  return (
    <StyledSignUpPage bg={bg}>
      <div className="container text-center">
        <UserLoginSignUpTab variant="signup-active" />

        <div className="inputs text-center pt-5 col-12 col-md-7 mx-auto">
          <input
            type="email"
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
        <Button text="sign up" onClick={handleSignUp} />
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
