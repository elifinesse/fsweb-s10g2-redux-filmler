import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favReducer from "./favReducer";

const newReducer = combineReducers({ mov: movieReducer, fav: favReducer });

export default movieReducer;
