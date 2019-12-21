import reducer from './weather';
import {
  FETCH_WEATHER,
  FETCH_WEATHER_FAILED,
  FETCH_WEATHER_SUCCESS,
} from '../constants/actionTypes';

describe('weather reducer', () => {
  const initialState = {
    list: [
      { id: 123456, name: 'Test 1', selected: false },
      { id: 789101, name: 'Test 2', selected: false },
    ],
    isLoaded: false,
    hasError: false,
  };

  it('no action', () => {
    let state = reducer(null, { type: 'NO_ACTION' });
    expect(state).toEqual(null);
  });


  it('FETCH_WEATHER', () => {
    let state = reducer(initialState, { type: FETCH_WEATHER });
    let expectedState = {
      ...initialState,
    };
    expect(state).toEqual(expectedState);
  });

  it('FETCH_WEATHER_FAILED', () => {
    let state = reducer(initialState, {
      type: FETCH_WEATHER_FAILED,
      payload: 'error',
    });
    let expectedState = {
      ...initialState,
      isLoaded: true,
      hasError: true,
      error: 'error',
    };
    expect(state).toEqual(expectedState);
  });

  it('FETCH_WEATHER_SUCCESS', () => {
    let state = reducer(initialState, {
      type: FETCH_WEATHER_SUCCESS,
      payload: { id: 123456 },
    });
    let expectedState = {
      list: [
        { id: 123456, selected: true, loaded: true },
        { id: 789101, name: 'Test 2', selected: false },
      ],
      isLoaded: true,
    };
    expect(state.list).toEqual(expectedState.list);
  });
});
