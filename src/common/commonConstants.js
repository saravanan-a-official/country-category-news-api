export const API_BASE_URL = "https://newsapi.org/v2/";
export const API_KEY = "c4ee56f02bd84412955a4fc2ffc68b1e";
export const LOAD_HEADLINES_DETAILS = "LOAD_HEADLINES_DETAILS";
export const GET_HEADLINES_OK = "GET_HEADLINES_OK";
export const LOAD_BREAKING_NEWS = "LOAD_BREAKING_NEWS";
export const GET_BREAKING_NEWS_OK = "GET_BREAKING_NEWS_OK";
export const LOAD_NEWS_SEARCH = "LOAD_NEWS_SEARCH";
export const GET_NEWS_SEARCH_OK = "GET_NEWS_SEARCH_OK";
export const INITIAL_STATE = {
  breakingNews: [],
  categoryNews: [],
  searchNews: [],
  loading: false,
};
export const COUNTRY_CODE_DEFAULT = "in";
export const CATEGORY_CODE_DEFAULT = "business";
