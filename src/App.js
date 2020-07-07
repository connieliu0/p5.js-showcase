import "./styles/App.css";
import { Layout, Row } from "antd";
import TestCard from "./TestCard.js";
import React from "react";
import examples from "./data/showcase2019.json";
import { openLink } from "./util";
import Details from "./Details.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
  HashRouter
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <div className="Project-text">
          <h1>p5.js 2019 Showcase!</h1>
          <p>
            Curated by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ashleykang.dev/"
            >
              Ashley Kang
            </a>{" "}
            in the summer of 2019, below is the first ever curated collection of the p5.js showcase! We compiled different ways to use p5.js and learn more about each one by clicking on it.
         </p>
    </div>
    <Switch>
    <Route path="/gallery" children={<Gallerynineteen />} />
    <Route path="/:id" children={<Modal />} />
    </Switch>{" "}
    </Router>
  );
}

function Gallerynineteen() {
  const {Header, Content} = Layout;
return(
    <Layout>
      <Content className="App-content">
        {/* Cards Container */}
        <Row className="Examples-Container" gutter={[20, 20]}>
          {examples.map(i => (
             <Link
             key={i.id}
             to={{
               pathname: `/${i.id}`,
             }}
           >
            <TestCard key={`card-${i}`} title={i.title} author={i.author} description={i.description} image={i.image}/>
            </Link>
          ))}
        </Row>
      </Content>
    </Layout>
            
  );
}

function Modal() {
  let { id } = useParams();
  let piece = examples.find(x=> x.id === id);

  if (!piece) return <div>Image not found</div>;

  return (
    <Details
    piece={piece}
    />
  );
}
