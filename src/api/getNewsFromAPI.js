import axios from "axios";
import * as CommonConstants from "../common/commonConstants";
export async function getHeadlines(
  countryCode = CommonConstants.COUNTRY_CODE_DEFAULT,
  category = CommonConstants.CATEGORY_CODE_DEFAULT
) {
  if (
    window.sessionStorage.getItem("country") !== undefined &&
    window.sessionStorage.getItem("country") !== ""
  ) {
    countryCode = window.sessionStorage.getItem("country");
  }
  if (
    window.sessionStorage.getItem("category") !== undefined &&
    window.sessionStorage.getItem("category") !== ""
  ) {
    category = window.sessionStorage.getItem("category");
  }
  const axiosNewsResponse = await axios.get("/top-headlines", {
    params: {
      country: countryCode,
      category: category,
      apiKey: CommonConstants.API_KEY,
    },
  });
  console.log("axiosNewsResponse", axiosNewsResponse);
  return axiosNewsResponse.data.articles;
}
