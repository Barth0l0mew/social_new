import React from "react";
import * as axios from "axios"
import UserPage from "../../components/userPage/userPage";
import Preloader from "../../components/preloader/preloder";
class UserPageClass extends React.Component {
  constructor (props) {
    super (props);
    this.handlePageClick=this.handlePageClick.bind(this);
    this.onChangeFollow=this.onChangeFollow.bind(this);

  }
  componentDidMount(){
    console.log (this.props.users.length)
    this.props.setIsFetching(true)
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`)
    .then((response) => {
      this.props.setIsFetching(false)
      console.log(response.data.items)
      this.props.dataSet(response.data.items);
      this.props.setTotalCount(response.data.totalCount)
      this.props.setPageCount(Math.ceil(response.data.totalCount/this.props.pageSize))
    });
    
  }
  handlePageClick(event){
    console.log (event)
    this.props.setIsFetching(true)
    this.props.setCurrentPage(event.selected)
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${event.selected+1}&count=${this.props.pageSize}`)
    .then((response) => {
      console.log(response.data.items)
      this.props.setIsFetching(false)
      this.props.dataSet(response.data.items);
      this.props.setTotalCount(response.data.totalCount)
      this.props.setPageCount(Math.ceil(response.data.totalCount/this.props.pageSize))
    });
  }
  onChangeFollow(id){
    console.log (id)
    this.props.setFollow(id)
  }
  render (){
    return (
      <>
      {this.props.isFetching?<Preloader></Preloader>: <UserPage {...this.props} handlePageClick={this.handlePageClick} onChangeFollow={this.onChangeFollow}></UserPage>}
      </>
    )
  }
}
export default UserPageClass