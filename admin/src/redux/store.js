import {configureStore, combineReducers} from "@reduxjs/toolkit";
import productReducer from "./productRedux";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, productReducer); 

export const store = configureStore({
    reducer: {
        product: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
         serializableCheck: {
             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
     }),
});

export let persistor = persistStore(store);