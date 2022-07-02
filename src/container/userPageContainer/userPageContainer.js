import { connect } from "react-redux";
import UserPage from "../../components/userPage/userPage";
import { onSetCurrentPage, onSetDataAC, onSetPageCount, onSetTotalCount } from "../../store/userPage/userPageAC";
import UserPageClass from "./userPageClass";
const mapStateToProps =(state)=>{
  console.log (state)
  return {
    users:state.userPage.users,
    pageSize:state.userPage.pageSize,
    totalCount:state.userPage.totalCount,
    currentPage:state.userPage.currentPage,
    pageCount:state.userPage.pageCount
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    //onSetDataAC
    dataSet:(body)=>{dispatch(onSetDataAC(body))},
    setTotalCount:(body)=>{dispatch(onSetTotalCount(body))},
    setPageCount:(body)=>{dispatch(onSetPageCount(body))},
    setCurrentPage:(body)=>{dispatch(onSetCurrentPage(body))}
  }
}
export const UserPageContainer = connect (mapStateToProps, mapDispatchToProps)(UserPageClass)