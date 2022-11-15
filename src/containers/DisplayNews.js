import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import DisplayNewsinGrid from "../components/DisplayNewsinGrid";

function DisplayNews(props) {
  const newsData = useSelector((state) => state);
  if (newsData.loading) {
    return (
      <div>
        <br />
        <Spinner animation="grow"></Spinner>
        <h3>Loading News...</h3>
      </div>
    );
  }
  return (
    <DisplayNewsinGrid
      newsData={newsData}
      newsType={props.newsType}
    ></DisplayNewsinGrid>
  );
}

export default DisplayNews;
