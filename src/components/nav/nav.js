import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./nav.module.css";
const Nav = () => {
  const StyleActive = Style.menu__active;
  const StyleLink = Style.menu__link;
  console.log(StyleActive, StyleLink, Style);
  const styleLink = (isActive) => {
    return isActive ? "menu__active" : "menu__link";
  };
  return (
    <nav className={Style.nav}>
      <ul className={Style.menu}>
        <li className={Style.menu__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? Style.menu__active : Style.menu__link
            }
            to="/"
          >
            Profile
          </NavLink>
        </li>
        <li className={Style.menu__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? Style.menu__active : Style.menu__link
            }
            to="/message"
          >
            Message
          </NavLink>
        </li>
        <li className={Style.menu__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? Style.menu__active : Style.menu__link
            }
            to="/News"
          >
            News
          </NavLink>
        </li>
        <li className={Style.menu__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? Style.menu__active : Style.menu__link
            }
            to="/Music"
          >
            Music
          </NavLink>
        </li>
        <li className={Style.menu__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? Style.menu__active : Style.menu__link
            }
            to="/Users"
          >
            Users
          </NavLink>
        </li>
        <li className={Style.menu__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? Style.menu__active : Style.menu__link
            }
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
