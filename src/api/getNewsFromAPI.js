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
  return axiosNewsResponse.data.articles;
}

export async function getBreakingNews(searchText = "breaking") {
  const axiosNewsResponse = await axios.get("/everything", {
    params: {
      q: searchText,
      apiKey: CommonConstants.API_KEY,
    },
  });
  return axiosNewsResponse.data.articles;
}
