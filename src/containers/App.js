import { Tabs, Tab } from "react-bootstrap";
import "../styles/App.css";
import DisplayNewsByCategoryCountry from "./DisplayNewsByCategoryCountry";
import DisplayBreakingHeadlines from "./DisplayBreakingHeadlines";
import DisplayNewsBySearchText from "./DisplayNewsBySearhText";

function App() {
  return (
    <div className="App">
      <h1>News API</h1>
      <Tabs
        defaultActiveKey="bycategory"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="bycategory" title="News By Category & Country">
          <DisplayNewsByCategoryCountry />
        </Tab>
        <Tab eventKey="breaking" title="Breaking News">
          <DisplayBreakingHeadlines />
        </Tab>
        <Tab eventKey="search" title="SearchNews">
          <DisplayNewsBySearchText />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
