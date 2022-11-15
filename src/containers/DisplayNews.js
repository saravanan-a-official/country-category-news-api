import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import DisplayNewsinGrid from "../components/DisplayNewsinGrid";

function DisplayNews(props) {
  const newsData = useSelector((state) => state);
  if (newsData.loading && newsData[props.newsType].length === 0) {
    <div>
      <br />
      <Spinner></Spinner>
    </div>;
  }
  return (
    <DisplayNewsinGrid
      newsData={newsData}
      newsType={props.newsType}
    ></DisplayNewsinGrid>
  );
}

export default DisplayNews;
