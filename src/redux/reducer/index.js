import * as CommonConstants from "../../common/commonConstants";

const initialState = CommonConstants.INITIAL_STATE;

const reducer = (
  state = initialState,
  action = {
    type: CommonConstants.LOAD_HEADLINES_DETAILS,
  }
) => {
  switch (action.type) {
    case CommonConstants.LOAD_HEADLINES_DETAILS:
      return { ...state, loading: true };
    case CommonConstants.GET_HEADLINES_OK:
      return { ...state, categoryNews: action.payload, loading: false };
    case CommonConstants.LOAD_BREAKING_NEWS:
      return { ...state, loading: true };
    case CommonConstants.GET_BREAKING_NEWS_OK:
      return { ...state, breakingNews: action.payload, loading: false };
    default:
      return state;
  }
};
export default reducer;
