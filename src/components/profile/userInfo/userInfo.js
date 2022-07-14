import React from "react";
import Style from "./userInfo.module.css"
const UserInfo = (props) =>{
  return(
    <div className={Style.container}>
      <div className={Style.photo}>Photo</div>
      <div className={Style.discription}>
        <div className={Style.name}>Name</div>
        <div className={Style.birth}>Date of Birth</div>
        <div className={Style.city}>City</div>
        <div className={Style.education}>Education</div>
        <div className={Style.web}>Web - Site</div>
      </div>
    </div>
  )
}
export default UserInfo