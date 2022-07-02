import React from "react";
import Header from "../header/header";
import Main from "../main/main";
import Nav from "../nav/nav";
import Style from "./layOut.module.css"
const LayOut = ()=>{
  return (
    <div className={Style.container}>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <footer className={Style.footer}>footer</footer>
    </div>
  )
}
export default LayOut