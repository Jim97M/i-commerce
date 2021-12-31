import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

export default configureStore({
    reducer: {
        user: userReducer,
    }
})

