import { combineReducers } from "redux";

import posts from "../posts/postsReducer";

const rootReducer = combineReducers({ posts });

export default rootReducer;
