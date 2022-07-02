import React from "react";
import * as axios from "axios"
import UserPage from "../../components/userPage/userPage";
class UserPageClass extends React.Component {
  constructor (props) {
    super (props);
    this.handlePageClick=this.handlePageClick.bind(this)
  }
  componentDidMount(){
    console.log (this.props.users.length)
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then((response) => {
      console.log(response.data.items)
      this.props.dataSet(response.data.items);
      this.props.setTotalCount(response.data.totalCount)
      this.props.setPageCount(Math.ceil(response.data.totalCount/this.props.pageSize))
    });
    
  }
  handlePageClick(event){
    console.log (event)
    this.props.setCurrentPage(event.selected+1)
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${event.selected+1}&count=${this.props.pageSize}`)
    .then((response) => {
      console.log(response.data.items)
      this.props.dataSet(response.data.items);
      this.props.setTotalCount(response.data.totalCount)
      this.props.setPageCount(Math.ceil(response.data.totalCount/this.props.pageSize))
    });
  }
  render (){
    return (
      <UserPage {...this.props} handlePageClick={this.handlePageClick}></UserPage>
    )
  }
}
export default UserPageClass