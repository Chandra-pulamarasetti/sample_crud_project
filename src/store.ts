import { configureStore, AnyAction } from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from "redux-thunk";
import UpdatePostReducer from "./components/Form/duck";
import PostsReducer from "./components/Main/duck";

const rootReducer = {
  PostsReducer,
  UpdatePostReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;

export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type Dispatch = typeof store.dispatch;
