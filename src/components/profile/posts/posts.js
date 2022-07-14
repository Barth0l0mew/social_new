import React from "react";
import Post from "./post/post";
import Style from "./posts.module.css"
const Posts = (props)=>{
  return(
    <div>
      <h3>My Posts</h3>
      <form className={Style.form} action="#" > 
        <textarea placeholder="Your news..." className={Style.textArea}></textarea>
        <button type="onSubmit" className={Style.btn}>Send</button>
      </form>
      <Post></Post>
    </div>
  )
}
export default Posts