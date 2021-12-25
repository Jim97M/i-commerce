import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux";


// const rootReducer = combineReducers({user: userReducer});

export default configureStore({
    reducer: {
        user: userReducer,
    }
})

