
import React from "react";
const UserPage = (props) => {
  console.log(props);
  
  

  return (
    <div>
     {props.users.map((element,id)=>{
       return <div key={id}>{element.name} </div>
     })}
    </div>
  );
};
export default UserPage;
