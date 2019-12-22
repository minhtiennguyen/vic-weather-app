import data from '../assets/data.json';
import {
  FETCH_WEATHER,
  FETCH_WEATHER_FAILED,
  FETCH_WEATHER_SUCCESS,
} from '../constants/actionTypes';

const citiesList = data.map(city => {
  return { id: city.id, name: city.name, selected: false };
});

const handleFetchWeatherSuccess = (state, action) => {
  const { list } = state;
  // const newList = list.map(city => (city.selected = false));
  const foundIndex = list.findIndex(city => city.id === action.payload.id);
  list[foundIndex] = action.payload;
  list[foundIndex].selected = true;
  list[foundIndex].loaded = true;
  return {
    list,
    isLoaded: true,
  };
}

const initialState = {
  list: citiesList,
  isLoaded: false,
  hasError: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        isLoaded: false,
        hasError: false,
      };
    case FETCH_WEATHER_SUCCESS: return handleFetchWeatherSuccess(state, action);
    case FETCH_WEATHER_FAILED:
      return {
        ...state,
        isLoaded: true,
        hasError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
