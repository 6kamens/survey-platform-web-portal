const NavBarTop = (props) => {
  return (
    <nav className="bd-navbar navbar has-shadow  navbar-style is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png"></img>
          </a>
          <a className="navbar-item is-hidden-desktop">
            {/* <img src="https://bulma.io/images/bulma-logo.png"></img> */}
          </a>

          <a className="navbar-burger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarTop;
