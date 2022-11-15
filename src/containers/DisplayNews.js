import { useSelector } from "react-redux";
import DisplayNewsinGrid from "../components/DisplayNewsinGrid";

function DisplayNews() {
  const newsData = useSelector((state) => state);
  return <DisplayNewsinGrid newsData={newsData}></DisplayNewsinGrid>;
}

export default DisplayNews;
