import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/sm-logo-text-green.png";
import styled from "styled-components";

const NavBarTop = (props) => {
  const [navbar, setNavbar] = useState(false);

  const navBarMenu = [
    {
      pageName: "หน้าหลัก",
      toPage: "/",
    },
    // ,
    // {
    //   pageName: "สินค้า/บริการ",
    //   toPage: "/product",
    // },
    // {
    //   pageName: "ค่าบริการ",
    //   toPage: "/pricing",
    // },
  ];

  const Nav = styled.nav`
    background-color: #fffefd;
  `;

  return (
    <Nav className="bd-navbar navbar has-shadow is-fixed-top ">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo}></img>
          </Link>
          <a
            className={navbar ? "navbar-burger is-active" : "navbar-burger"}
            onClick={() => setNavbar(!navbar)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={navbar ? "navbar-menu is-active" : "navbar-menu"}>
          <div className="navbar-start ">
            {navBarMenu.map((page) => (
              <a
                className="navbar-item has-text-centered"
                onClick={() => setNavbar(!navbar)}
              >
                <Link to={page.toPage}>
                  <span className="has-text-black">{page.pageName}</span>
                </Link>
              </a>
            ))}
          </div>
          <hr></hr>
          <div className="navbar-end ">
            <div className="navbar-item">
              <div className="buttons  is-centered">
                <button
                  className="button is-warning"
                  onClick={() => setNavbar(!navbar)}
                >
                  <strong>
                    <Link
                      to="/login"
                      className="has-text-black is-block kanit-font"
                    >
                      เข้าสู่ระบบ
                    </Link>
                  </strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default NavBarTop;
