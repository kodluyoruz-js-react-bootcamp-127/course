import { INCREMENT, DECREMENT } from "../actions";

/**
 * State
 * A object of properties
 */
const counterState = {
  value: 10,
  title: "Counter Example",
};

// Reducers (functions which return a value [state] (string, array, **object**))
// Two parameters
// 1. state (what is current state)
// 2. actions (what will reducer do?)
// state -> o an tuttuğumuz veri
// action -> bu reducer ne yapacak?
const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
