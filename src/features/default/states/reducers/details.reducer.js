import Actions from "../actions/index";

const initialState = {
  data: {},
  isLoading: false,
  error: false,
  message: "",
};

export const details = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FEATURE_DETAILS_REQUEST:
      return { ...initialState, isLoading: true };
    case Actions.FEATURE_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case Actions.FEATURE_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default details;
