// store.js
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk"; // If using redux-thunk for async actions

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
