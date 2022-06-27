import React from "react";
import Style from "./header.module.css"
import logo from "../../img/logo.svg"
const Header = ()=>{
  return(
    <div className={Style.header}>
      <img src={logo} className={Style.logo}></img>
      <span className="logName">Youth Social Network</span>
    </div>
  )
}
export default Header