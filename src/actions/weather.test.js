import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchWeather } from './weather';
import {
  FETCH_WEATHER,
  FETCH_WEATHER_FAILED,
  FETCH_WEATHER_SUCCESS,
} from '../constants/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('weather actions', () => {
  it('dispatches the correct actions on successful fetch request', () => {
    fetch.mockResponse(JSON.stringify({ data: '12345' }));

    const expectedActions = [
      { type: FETCH_WEATHER },
      { type: FETCH_WEATHER_SUCCESS, payload: { data: '12345' } },
    ];
    const store = mockStore({ weather: {} });

    return store.dispatch(fetchWeather()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches the correct actions on a failed fetch request', () => {
    fetch.mockReject('error');

    const expectedActions = [
      { type: FETCH_WEATHER },
      { type: FETCH_WEATHER_FAILED, payload: 'error' },
    ];
    const store = mockStore({ weather: {} });

    return (
      store
        .dispatch(fetchWeather())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    );
  });
});
