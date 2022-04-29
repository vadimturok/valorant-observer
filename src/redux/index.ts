import { combineReducers, configureStore } from "@reduxjs/toolkit";
import agentReducer from "./slices/AgentSlice";

const rootReducer = combineReducers({
  agentReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
