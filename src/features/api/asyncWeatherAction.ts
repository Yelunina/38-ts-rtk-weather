import { AppDispatch } from "../../app/store"
import { api_key, base_url } from "../../utils/constants"
import { putMessage } from "../slices/messageSlice"
import { putWeatherInfo } from "../slices/weatherSlice"

export const fetchWeather = (city: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(putMessage('Pending...'))
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            const data = await response.json();
            dispatch(putWeatherInfo({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            }));
            dispatch(putMessage(''))
        } catch (e) {
            dispatch(putMessage('Enter correct city name'));
        }
    }
}