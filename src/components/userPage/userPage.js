import ReactPaginate from "react-paginate";
import React from "react";
import Style from "./userPage.module.css";
import noPhoto from "../../img/notPhoto.jpg"
const UserPage = (props) => {
  console.log(props);

  return (
    <div>
      <h3>Users</h3>
      {props.users.map((element, id) => {
        return (
          <div key={id} className={Style.userContainer}>
            <div className={Style.userLogo}>
              <img className={Style.userPhoto} src={element.photos.small?element.photos.small:noPhoto}></img>
              <button className={Style.userFollow} onClick={()=>props.onChangeFollow(element.id)}>{!element.followed?"Follow":"UnFollow"}</button>
            </div>
            <div className={Style.userDiscription}>
              <div className={Style.userInfoLeft}>
                <div className={Style.userName}>{element.name}</div>
                <div className={Style.userStatus}>{element.status?element.status:"Not User Status"}</div>
              </div>
              <div className={Style.userInfoRight}>
                <div className={Style.userCountry}>Belarus</div>
                <div className={Style.userCity}>Vitebsk</div>
              </div>
            </div>
          </div>
        );
      })}
      <ReactPaginate
        pageCount={props.pageCount}
        nextLabel=">"
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={Style.container}
        pageClassName={Style.pageItems}
        previousClassName={Style.previousLabel}
        nextClassName={Style.nextLabel}
        breakClassName={Style.breacklabel}
        activeClassName={Style.activePage}
        activeLinkClassName={Style.activePage}
        breakLabel="..."
        forcePage={props.currentPage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={props.handlePageClick}
        onPageActive={props.handlePageClick}
      ></ReactPaginate>
    </div>
  );
};
export default UserPage;
