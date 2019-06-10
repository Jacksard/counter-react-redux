// initilize initial State
const initialState = {
  counter: 0
};

//const reducer and cases
const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    };
  }
  if (action.type === 'RESET') {
    return {
      counter: 0
    };
  }

  return state;
};

export default reducer;
