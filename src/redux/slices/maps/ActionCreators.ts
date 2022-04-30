import {AppDispatch} from "../../index";
import axios from "axios";
import {ApiResponse, IMap} from "../../../types";
import {mapSlice} from "./MapSlice";

export const fetchMaps = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(mapSlice.actions.startFetching());
        const response = await axios.get<ApiResponse<IMap>>(
            "https://valorant-api.com/v1/maps"
        );
        dispatch(mapSlice.actions.successFetching(response.data.data));
    } catch (e: any) {
        dispatch(mapSlice.actions.errorFetching(e.message));
    }
};