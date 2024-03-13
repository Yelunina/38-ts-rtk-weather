import { createSlice } from "@reduxjs/toolkit";
import { WeatherInfo } from "../../utils/types";

const preloadedState: WeatherInfo = {}

const weatherSlice = createSlice({
    name: 'weather',
    initialState: preloadedState,
    reducers: {
        putWeatherInfo: (state, action) => {
            return action.payload;
        }
    }
})

export const {putWeatherInfo} = weatherSlice.actions
export default weatherSlice.reducer