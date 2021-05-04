import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { courseListReducer } from "./reducers/courseReducers";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  courseList: courseListReducer,
  userLogin: userLoginReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
