import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAgent } from "../../types";

interface AgentState {
  agents: IAgent[];
  isLoading: boolean;
  error: string;
}

const initialState: AgentState = {
  agents: [],
  isLoading: false,
  error: "",
};

export const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    startFetching(state) {
      state.isLoading = true;
    },
    successFetching(state, action: PayloadAction<IAgent[]>) {
      state.isLoading = false;
      state.error = "";
      state.agents = action.payload;
    },
    errorFetching(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default agentSlice.reducer;
