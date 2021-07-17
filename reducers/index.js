import { combineReducers } from "redux";
import list from './list';
import Login from "./login";
import marks from "./marks";
import profile from './profile';
import community from './community';
import like from "./like"



export default combineReducers({
  list,
  Login,
  marks,
  profile,
  community,
  like
})