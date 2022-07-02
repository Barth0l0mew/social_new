import React from "react";
import Style from "./main.module.css"
import { Outlet } from "react-router-dom";
const Main = () =>{
  return (
    <main className={Style.main}>
      <Outlet></Outlet>
    </main>
  )
}
export default Main 