import { combineReducers } from "redux";
import authReducer from "./authReducer";
import rentCarReducer from "./rentCarReducer";


const rootReducer = combineReducers({
    auth:authReducer,
    rent:rentCarReducer
});

export default rootReducer;
