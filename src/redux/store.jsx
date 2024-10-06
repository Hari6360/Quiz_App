import { legacy_createStore, combineReducers } from "redux";
import { applyMiddleWare } from "redux";
import thunk from "redux";
import { quizReducer } from "./reducers";

export const reducer = combineReducers({
	quiz: quizReducer,
});

const store = legacy_createStore(reducer, applyMiddleWare(thunk));
export default store;
