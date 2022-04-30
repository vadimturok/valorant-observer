import axios from "axios";
import { AppDispatch } from "../../index";
import {ApiResponse, IAgent} from "../../../types";
import { agentSlice } from "./AgentSlice";

export const fetchAgents = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(agentSlice.actions.startFetching());
    const response = await axios.get<ApiResponse<IAgent>>(
      "https://valorant-api.com/v1/agents"
    );
    dispatch(agentSlice.actions.successFetching(response.data.data));
  } catch (e: any) {
    dispatch(agentSlice.actions.errorFetching(e.message));
  }
};
