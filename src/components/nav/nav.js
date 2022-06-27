import React from "react";
import Style from "./nav.module.css"
const Nav = ()=>{
  return (
    <nav className={Style.nav}>
      <ul className={Style.menu}>
        <li className={Style.menu__item}>Profile</li>
        <li className={Style.menu__item}>Message</li>
        <li className={Style.menu__item}>News</li>
        <li className={Style.menu__item}>Music</li>
        <li className={Style.menu__item} >Users</li>
        <li className={Style.menu__item}>Settings</li>
      </ul>
      
    </nav>
  )
}
export default Nav