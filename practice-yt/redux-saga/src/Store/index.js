import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import userSaga from "../saga/user-saga";
const sagaMiddleware = createSagaMiddleware();
const users = [];

const reducer = (state = users, action) => {
  if (action.type === "GET_USER") {
  }
  if (action.type === "SET_USER") {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  users: reducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(userSaga);

export default store;
