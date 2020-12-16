import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/sm-logo-text-green.png";

const NavBarTop = (props) => {
  const [navbar, setNavbar] = useState(false);

  const navBarMenu = [
    {
      pageName: "Main",
      toPage: "/main",
    },
    {
      pageName: "Products",
      toPage: "/product",
    },
    {
      pageName: "Pricing",
      toPage: "/pricing",
    },
  ];

  return (
    <nav className="bd-navbar navbar has-shadow  navbar-style is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo}></img>
          </a>
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
                <button className="button is-warning" onClick={() => setNavbar(!navbar)}>
                  <strong>
                    <Link to="/login" className="has-text-black is-block">Login</Link>
                  </strong>
                </button>
              </div>
            </div>
            <div className="navbar-item">
              <div className="buttons  is-centered" onClick={() => setNavbar(!navbar)}> 
                <button className="button">
                  <strong>
                    <Link to="/register" className="has-text-black is-block">Sign up</Link>
                  </strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarTop;
