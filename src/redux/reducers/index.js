import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Auth from "./auth";
import CrudR from "./crudR";
const Index = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: Auth,
    crudR: CrudR,
  });
export default Index;
