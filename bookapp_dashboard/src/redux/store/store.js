// @ts-nocheck
import {
  ConfigureStore,
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import { BookReducer } from "../reducer/bookreducer";

import createSagaMiddleware from "redux-saga";
import BookSaga from "../saga/booksaga";
//To enable Redux DevTools Extension, just use window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  BookReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(BookSaga);

export default store;
