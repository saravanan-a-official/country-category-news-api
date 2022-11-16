import { Carousel } from "react-bootstrap";

function DisplayNewsinGrid(props) {
  const newsType = props.newsType;
  if (props.newsData[newsType] !== undefined) {
    const newsData = props.newsData[newsType];
    return newsData.length > 0 ? (
      <Carousel pause="hover" indicators={false}>
        {formCarouselItems(newsData)}
      </Carousel>
    ) : (
      <h1> {/* News Not available */}</h1>
    );
  }

  return;
}
function formCarouselItems(newsData) {
  let carouselItems = [];
  carouselItems = newsData.map((data, idx) => {
    if (data.urlToImage !== null) {
      return (
        <Carousel.Item id={idx}>
          <img
            className="d-block w-100"
            src={data.urlToImage}
            alt={data.title}
            height="530px"
            width="940px"
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
