import axios from "axios";
import { AppDispatch } from "..";
import {ApiResponse} from "../../types";
import { agentSlice } from "./AgentSlice";

export const fetchAgents = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(agentSlice.actions.startFetching());
    const response = await axios.get<ApiResponse>(
      "https://valorant-api.com/v1/agents"
    );
    dispatch(agentSlice.actions.successFetching(response.data.data));
  } catch (e: any) {
    dispatch(agentSlice.actions.errorFetching(e.message));
  }
};
