import { Tabs, Tab } from "react-bootstrap";
import "../styles/App.css";
import DisplayNewsByCategoryCountry from "./DisplayNewsByCategoryCountry";
import DisplayBreakingHeadlines from "./DisplayBreakingHeadlines";

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
          <DisplayBreakingHeadlines></DisplayBreakingHeadlines>
        </Tab>
        {/* <Tab eventKey="contact" title="Contact" disabled>
          <h1>simple News</h1>
        </Tab> */}
      </Tabs>
    </div>
  );
}

export default App;
