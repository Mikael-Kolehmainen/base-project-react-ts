import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import exampleSlice from "./example/exampleSlice";

/*
  This is rootReducer.ts, the main reducer for handling the global state of the
  application. In here I bring together all the slices of the state and define
  if they should be persistent or not.
*/

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = combineReducers({
  example: persistReducer(persistConfig, exampleSlice),
  exampleNonPersistent: exampleSlice,
});
