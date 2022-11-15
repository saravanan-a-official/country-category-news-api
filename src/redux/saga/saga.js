import { call, put, takeLatest, all } from "redux-saga/effects";
import * as CommonConstants from "../../common/commonConstants";
import * as api from "../../api/getNewsFromAPI";

function* getNewsDataWatcher() {
  yield all([
    takeLatest(CommonConstants.LOAD_HEADLINES_DETAILS, pushHeadlinesToStore),
  ]);
}

function* pushHeadlinesToStore(action) {
  const headlineNews = yield call(api.getHeadlines, "");
  yield put({
    type: CommonConstants.GET_HEADLINES_OK,
    payload: headlineNews,
  });
}

export default getNewsDataWatcher;
