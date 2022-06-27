import React from "react";
import * as axios from "axios"
import UserPage from "../../components/userPage/userPage";
class UserPageClass extends React.Component {
  constructor (props) {
    super (props);

  }
  componentDidMount(){
    console.log (this.props.users.length)
    axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then((response) => {
      console.log(response.data.items)
      this.props.dataSet(response.data.items);
    });
    
  }
  render (){
    return (
      <UserPage users={this.props.users}></UserPage>
    )
  }
}
export default UserPageClass