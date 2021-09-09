import Actions from "../actions/index";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
  message: "",
};

export const list = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FEATURE_LIST_REQUEST:
      return { ...initialState, isLoading: true };
    case Actions.FEATURE_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case Actions.FEATURE_LIST_FAILURE:
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

export default list;
