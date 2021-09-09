import { combineReducers } from "redux";

import { list as todoList } from "../../features/default/states/reducers";
import { details as todoDetails } from "../../features/default/states/reducers";

export default combineReducers({
  todoList,
  todoDetails,
});
