import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBreakingNews } from "../redux/action";
import DisplayNews from "./DisplayNews";

function DisplayBreakingHeadlines() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBreakingNews());
  });
  return <DisplayNews newsType="breakingNews" />;
}

export default DisplayBreakingHeadlines;
