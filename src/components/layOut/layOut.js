import React from "react";
import Header from "../header/header";
import Style from "./layOut.module.css"
const LayOut = ()=>{
  return (
    <div className={Style.container}>
      <Header></Header>
      <nav className={Style.nav}>nav</nav>
      <main className={Style.main}>main</main>
      <footer className={Style.footer}>footer</footer>
    </div>
  )
}
export default LayOut