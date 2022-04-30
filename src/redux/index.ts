import { combineReducers, configureStore } from "@reduxjs/toolkit";
import agentReducer from "./slices/agents/AgentSlice";
import mapReducer from './slices/maps/MapSlice'

const rootReducer = combineReducers({
  agentReducer,
  mapReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
