// import { FETCH_WEATHER } from '../constants/actionTypes';
import { createAction } from 'redux-actions';
import config from '../config';

const fetchWeatherSuccess = createAction('FETCH_WEATHER_SUCCESS');
const fetchWeatherFailed = createAction('FETCH_WEATHER_FAILED');

const fetchWeather = (cityId, unit) => dispatch => {
  const url = `${config.apiUrl}?id=${cityId}&APPID=${config.apiKey}&units=${unit}`;
  dispatch({ type: 'FETCH_WEATHER' });
  return fetch(url)
    .then(res => res.json())
    .then(
      result => dispatch(fetchWeatherSuccess(result)),
      err => dispatch(fetchWeatherFailed(err))
    );
}

export { fetchWeather };
