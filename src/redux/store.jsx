import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { quizReducer } from "./reducers";

export const reducer = combineReducers({
	quiz: quizReducer,
});

const store = legacy_createStore(reducer, applyMiddleware(thunk));
export default store;
