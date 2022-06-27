import { connect } from "react-redux";
import UserPage from "../../components/userPage/userPage";
import { onSetDataAC } from "../../store/userPage/userPageAC";
import UserPageClass from "./userPageClass";
const mapStateToProps =(state)=>{
  console.log (state)
  return {
    users:state.userPage.users
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    //onSetDataAC
    dataSet:(body)=>{dispatch(onSetDataAC(body))}
  }
}
export const UserPageContainer = connect (mapStateToProps, mapDispatchToProps)(UserPageClass)