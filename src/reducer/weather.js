const initialState = {};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      break;

    default:
      return state;
  }
};

export default weatherReducer;
