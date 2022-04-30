import {IMap} from "../../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface MapState{
    maps: IMap[];
    isLoading: boolean;
    error: string;
}

const initialState: MapState = {
    maps: [],
    isLoading: false,
    error: ''
}

export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        startFetching(state) {
            state.isLoading = true;
        },
        successFetching(state, action: PayloadAction<IMap[]>) {
            state.isLoading = false;
            state.error = "";
            state.maps = action.payload;
        },
        errorFetching(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default mapSlice.reducer