import { SET_CURRENT_PAGE, SET_DATA, SET_FOLLOW, SET_PAGE_COUNT, SET_TOTAL_COUNT } from "./userPageAC";
let initial = {
  users: [],
  pageSize: 10,
  totalCount:0,
  currentPage:1,
  pageCount:0
};
export const userPageReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_DATA: {
      let stateCopy = {
        ...state,
        users: action.payLoad,
      };
      console.log ('state',stateCopy)
      return stateCopy;
    }
    case SET_TOTAL_COUNT: {
      let stateCopy = {
        ...state,
        totalCount: action.payLoad
      };
      return stateCopy;
    }
    case SET_PAGE_COUNT: {
      let stateCopy = {
        ...state,
        pageCount: action.payLoad
      }
      return stateCopy
    }
    case SET_CURRENT_PAGE:{
      let stateCopy = {
        ...state,
        currentPage: action.payLoad
      }
      return stateCopy
    }
    case SET_FOLLOW:{
      console.log (action.payLoad)
      let stateCopy = {
        ...state,
        users:state.users.map(users=>{
          if (users.id === action.payLoad){
           
            return {...users,followed:!users.followed}
          }
          return users
        })
      }
      return stateCopy
    }
    default:
      return state;
  }
};
