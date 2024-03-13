import React, { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { fetchWeather } from '../features/api/asyncWeatherAction';

const Form = () => {

    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const getCity = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    return (
        <form onSubmit={getCity}>
            <input value={city} onChange={handleChange} type='text' />
            <button type='submit'>Get weather</button>
        </form>
    )
}

export default Form