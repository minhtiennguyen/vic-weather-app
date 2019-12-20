import data from '../assets/data.json';

const citiesList = data.map(city => {
  return { id: city.id, name: city.name };
});

const initialState = {
  list: citiesList,
  isLoaded: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER':
      return {
        ...state,
        isLoaded: false
      };
    case 'FETCH_WEATHER_SUCCESS':
      return {
        ...state,
        isLoaded: true,
        current: action.payload
      };
    case 'FETCH_WEATHER_FAILED':
        return {
          ...state,
          isLoaded: true,
          error: action.payload
        };
    default:
      return state;
  }
};

export default weatherReducer;
