import * as CommonConstants from "../../common/commonConstants";

//Used to invoke API and get new for a particular country and cateogry.
export function getNewsForCountryAndCategory() {
  return { type: CommonConstants.LOAD_HEADLINES_DETAILS };
}
