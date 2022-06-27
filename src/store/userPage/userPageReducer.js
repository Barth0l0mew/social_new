import { SETDATA } from "./userPageAC";
let initial = {
  users: [],
};
export const userPageReducer = (state = initial, action) => {
  switch (action.type) {
    case SETDATA: {
      let stateCopy = {
        ...state,
        users: [...state.users, ...action.payLoad],
      };
      console.log ('state',stateCopy)
      return stateCopy;
    }
    default:
      return state;
  }
};
