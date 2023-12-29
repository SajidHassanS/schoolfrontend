import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import createRootReducer from "../reducers";

const createBrowserHistory = require("history").createBrowserHistory;

export const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);

const middlewares = [thunk, routeMiddleware];

const store = createStore(
  createRootReducer(history), // root reducer with router state
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      ...middlewares
    )
  )
);

export default store;
