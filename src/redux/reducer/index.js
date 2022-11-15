import * as CommonConstants from "../../common/commonConstants";

const initialState = CommonConstants.INITIAL_STATE;

const reducer = (
  state = initialState,
  action = { type: CommonConstants.LOAD_HEADLINES_DETAILS, pokeData: {} }
) => {
  switch (action.type) {
    case CommonConstants.LOAD_HEADLINES_DETAILS:
      return { ...state, action };
    case CommonConstants.GET_HEADLINES_OK:
      return { ...state, action };
    default:
      return state;
  }
};
export default reducer;
