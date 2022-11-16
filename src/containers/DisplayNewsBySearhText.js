import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNewsBySeachText } from "../redux/action";
import DisplayNews from "./DisplayNews";

function DisplayNewsBySearchText() {
  let [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const searchWidget = (
    <div>
      <h1>Display News By Search Text</h1>
      <input
        type="text"
        placeholder="Enter the search text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button onClick={() => dispatch(getNewsBySeachText(searchText))}>
        Get News
      </button>
      {/* <br />
      <br /> */}
      <DisplayNews newsType="searchNews" />
    </div>
  );
  return searchWidget;
}

export default DisplayNewsBySearchText;
