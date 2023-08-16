import { combineReducers, configureStore } from "@reduxjs/toolkit";
import templatesSlice from "./templateSlice"; //importing slice
import OrderSlice from "./features/GetOrders/myorders.slice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  users: templatesSlice,
  orders: OrderSlice,
});

const mypersistReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: mypersistReducer,
  middleware: [thunk],
});

export default store;
export type RootState =  ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);
