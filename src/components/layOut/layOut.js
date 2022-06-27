import React from "react";
import Header from "../header/header";
import Nav from "../nav/nav";
import Style from "./layOut.module.css"
const LayOut = ()=>{
  return (
    <div className={Style.container}>
      <Header></Header>
      <Nav></Nav>
      <main className={Style.main}>main</main>
      <footer className={Style.footer}>footer</footer>
    </div>
  )
}
export default LayOut