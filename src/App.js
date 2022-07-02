import "./App.css";
import React from "react";
//import { Routes, Route } from 'react-router/lib/components';
import { Routes, Route } from "react-router-dom";
import LayOut from "./components/layOut/layOut";
import { UserPageContainer } from "./container/userPageContainer/userPageContainer";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<LayOut></LayOut>}>
          <Route
            path="users"
            element={<UserPageContainer></UserPageContainer>}
          ></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
        </Route>
      </Routes>

      {/* <UserPageContainer></UserPageContainer> */}
    </div>
  );
}

export default App;
