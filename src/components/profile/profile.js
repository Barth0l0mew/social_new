import React from "react";
import Posts from "./posts/posts";
import Style from "./profile.module.css"
import UserInfo from "./userInfo/userInfo";
const Profile = (props)=>{
  return(
    <div className={Style.profile}>
      <img className={Style.profileBg} src="https://i.pinimg.com/originals/2f/15/7e/2f157e568d99c0a2dc6c9737f460d27b.jpg"></img>
      <UserInfo></UserInfo>
      <Posts></Posts>
    </div>
  )
}
export default Profile