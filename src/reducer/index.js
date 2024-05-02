import { combineReducers } from "redux";
import reducerMain from "./reducerMain";
import ReducerMessage from "./reducerMessage";
import userReducer from "./userReducer";
import reducerHome from "./reducerHome";

const Store = combineReducers({
    reducerMain,
    ReducerMessage,
    userReducer,
    reducerHome
})
export default Store
