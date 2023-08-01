import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favReducer from "./favReducer";

export const newReducer = combineReducers({
  mov: movieReducer,
  fav: favReducer,
});

export default movieReducer;
