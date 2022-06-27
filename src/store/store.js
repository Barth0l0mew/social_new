import { combineReducers, createStore } from "redux";
import { userPageReducer } from "./userPage/userPageReducer";
const rootReducer = combineReducers({
  userPage: userPageReducer,
});
export let store = createStore(rootReducer);
window.store = store;
