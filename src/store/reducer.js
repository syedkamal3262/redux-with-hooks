const initialState = {
  counter: 0,
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREAMENT": {
      return { ...state, counter: state.counter + 1 };
    }
    case "DECREAMENT": {
      return { ...state, counter: state.counter - 1 };
    }
    case "INCREASE_BY_NO": {
      return { ...state, counter: state.counter + action.payload };
    }
    default: {
      return state;
    }
  }
}
