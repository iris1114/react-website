import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../../images/common/logo.png";
import cartIcon from "../../images/common/cartIcon.png";
import { BREAKPOINTS, COLOR } from "../../utils/styles";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const Header = () => {
  const { authData, setAuthData } = useContext(AuthContext);
  // const localAuthToken = localStorage.getItem("authToken");
  // const localAuthCartNum = localStorage.getItem("authCartNum");
  // const localAuthUsername = localStorage.getItem("authUsername");
  const history = useHistory();

  const handleLogout = () => {
    setAuthData(null);
    // localStorage.clear("authData");
    // localStorage.clear("authCartNum");
    // localStorage.clear("authUsername");
  };

  const handleCartClick = () => {
    Swal.fire({
      icon: "warning",
      title: "Please Login.",
      showConfirmButton: false,
      timer: 1500,
    });
    history.push("/login");
  };

  return (
    <StyledHeader>
      <div className="container">
        <Navbar collapseOnSelect expand="md" sticky="top">
          <Navbar.Brand>
            <StyledNavLink to="/" className="logo">
              <img src={logo} alt="logo" />
            </StyledNavLink>
          </Navbar.Brand>

          <Nav className="order-1 order-md-2 info-wrap align-items-center">
            {authData && authData.access_token ? (
              <>
                <p className="mr-3 f-s f-lg-m username">
                  hi , {authData.username}
                </p>
                <div onClick={handleLogout}>
                  <StyledNavLink
                    to={"/"}
                    className="login mr-2 mr-md-4 f-s f-lg-m"
                  >
                    Logout
                  </StyledNavLink>
                </div>
                <Link to="/cart">
                  <div className=" cursor-pointer">
                    <div className="d-flex">
                      <div className="cart-icon">
                        <img src={cartIcon} alt="cart" />
                      </div>

                      {authData && authData.access_token ? (
                        <div className="cart-number">
                          <div className="radius">
                            <p className="number">{authData.num_carts}</p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <StyledNavLink
                  to={"/login"}
                  className="login mr-2 mr-md-4 f-s f-lg-m"
                >
                  Login
                </StyledNavLink>
                <div
                  className="cart-icon cursor-pointer"
                  onClick={handleCartClick}
                >
                  <img src={cartIcon} alt="cart" />
                </div>
              </>
            )}
          </Nav>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="order-2 order-md-3"
          />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="order-3 order-md-1"
          >
            <Nav className="mx-auto">
              <StyledNavLink to="/shop" className="m-3 mt-5 mt-md-3">
                Shop
              </StyledNavLink>
              <StyledNavLink to="/card" className="m-3">
                Send a Card
              </StyledNavLink>
              <StyledNavLink to="/about" className="m-3 mb-5 mb-md-0">
                About
              </StyledNavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${COLOR.nude};

  .logo {
    width: 150px;
    display: block;
  }

  .username {
    text-transform: uppercase;
  }

  .cart-icon {
    width: 25px;
    display: block;
  }
  .cart-number {
    .radius {
      border-radius: 50%;
      border: 1px solid ${COLOR.red};
      background-color: ${COLOR.red};
      color: ${COLOR.white};
      height: 25px;
      width: 25px;
      position: relative;

      .number {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 12px;
        color: ${COLOR.nude};
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.lg}px) {
    .logo {
      width: 100px;
    }
    .cart-icon {
      width: 20px;
      margin: 0px 5px;
    }
    .info-wrap {
      flex-direction: row;
      align-items: center;
      margin-left: auto;
      margin-right: 10px;
    }
    .navbar {
      padding: 15px 0px;
    }
    .cart-number {
      .radius {
        width: 20px;
        height: 20px;
      }
    }
    .navbar-toggler {
      padding: 0px 5px;
    }

    .navbar-brand {
      margin-right: 0px;
    }
  }
`;

const StyledNavLink = styled(Link)`
  text-transform: uppercase;

  &:hover {
    color: ${COLOR.gold};
  }
`;

export default Header;
