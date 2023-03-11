import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import React from "react";

// import { auth } from "../store/store.js";

import style from "../styles/Navbar.module.css";

// console.log(auth, "auth");

export const Navbar = () => {
  const [state, setState] = React.useState(false);
  // state = { clicked: false };

  function handleClick() {
    setState(state === true);
  }

  return (
    <nav className={`${style.NavbarItems}`}>
      <Link to="/">
        <h1 className={`${style.navbarlogo}`}>Expense Tracker</h1>
      </Link>

      <div className={`${style.menuicons}`} onClick={handleClick}>
        {state === true ? (
          <Icon icon="uis:bars" />
        ) : (
          <Icon icon="radix-icons:cross-2" />
        )}
      </div>

      <ul
        className={
          state === true
            ? `${style.navmenu} && ${style.active}`
            : `${style.navmenu}`
        }
      >
        <li>
          <Link to="/">
            <div className={`${style.navlinks}`}>Home</div>
          </Link>
        </li>
        <li>
          <Link to="/About">
            <div className={`${style.navlinks}`}>About</div>
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <div className={`${style.navlinks}`}>Contact</div>
          </Link>
        </li>
        <li>
          <Link to="/Blog">
            <div className={`${style.navlinks}`}>Blogs</div>
          </Link>
        </li>
        <Link to="/SignIn">
          <div className={`${style.navlinks}`}>Sign In</div>
        </Link>
      </ul>
    </nav>
  );
};
