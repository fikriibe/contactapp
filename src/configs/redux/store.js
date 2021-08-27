import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogicMiddleware } from "redux-logic";
import reducer from "./reducer";
import logic from "./logic";

const middleware = createLogicMiddleware(logic)
const store = createStore(reducer, compose(
    applyMiddleware(middleware),
    composeWithDevTools()
));
export default store