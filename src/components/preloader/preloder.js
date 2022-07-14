import React from "react";
import Style from "./preloader.module.css"
const Preloader = (props) =>{
  return (
    <div className={Style.container}>
      <div className={Style.ldsDualRing}></div>
    </div>
  )
}
export default Preloader