import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import Search from "./Search";
import "./Navbar.css";

function Navbar({ search }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //For login and navbar changes
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    history.push("./login");
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      {userInfo ? (
        <>
          <nav className="navbar align-items-center">
            <div className="navbar-container">
              <Link
                to="/main-page"
                className="navbar-logo"
                onClick={closeMobileMenu}
              >
                ELearning <i class="fas fa-chalkboard-teacher" />
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                {search ? <Search token={userInfo.token} /> : <> </>}
                <li className="nav-item">
                  <span className="nav-links">
                    Welcome, {userInfo.firstName}!
                  </span>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={handleLogout}
                  >
                    Logout{"  "}<i class="fas fa-sign-out-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="navbar align-items-center">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                ELearning <i class="fas fa-chalkboard-teacher" />
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>
              </ul>
              <Button buttonStyle="btn--outline">SIGN UP</Button>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}

export default Navbar;
