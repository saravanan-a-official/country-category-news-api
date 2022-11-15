import { Carousel, Spinner } from "react-bootstrap";

function DisplayNewsinGrid(props) {
  console.log("props", props);
  if (props.newsData.action !== undefined) {
    if (props.newsData.action.payload === undefined)
      return (
        <div>
          <br />
          <Spinner></Spinner>
        </div>
      );
    const newsData = props.newsData.action?.payload;
    console.log("props.newsData", props.newsData);
    return newsData?.length > 0 ? (
      <Carousel>{formCarouselItems(newsData)}</Carousel>
    ) : (
      <h1>{/* News Not available */}</h1>
    );
  }

  return;
}
function formCarouselItems(newsData) {
  let carouselItems = [];
  carouselItems = newsData.map((data, idx) => {
    if (data.urlToImage !== null) {
      return (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data.urlToImage}
            alt={data.title}
          />
          <Carousel.Caption>
            <h3>
              {data.title} - {data.author} - {data.publishedAt}
            </h3>
            <p>{data.content}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    }
  });
  return carouselItems;
}
export default DisplayNewsinGrid;
