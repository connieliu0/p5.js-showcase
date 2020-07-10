import "./styles/App.css";
import { Layout, Row } from "antd";
import TestCard from "./TestCard.js";
import React from "react";
import examples from "./data/showcase2019.json";
import { openLink } from "./util";
import Details from "./Details.js"
// import Homescreen from "./Homescreen.js"

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
          <div className="navigation">
          <Link to="/" className="item">about</Link>
            <Link to="/gallery2020" className="item">2020</Link>
            <Link to="/gallery2019" className="item">2019</Link>
            <a href="https://p5js.org">p5.js</a>
          </div>
    <Switch>
    <Route exact path="/" children={<Homescreen />}/>
    <Route exact path="/gallery2019" children={<Gallerynineteen />} />
    <Route path="/2019/:id" children={<Modal />} />
    <Route exact path="/gallery2020" children = {<Gallerytwenty />}/>
    </Switch>{" "}
    </Router>
  );
}

function Homescreen(){
  return(
    <div className="home1">
    <img src="/images/asterisk-01.png" alt="p5.js asterisk"/>
    <div className="home">
    <h1>Welcome to the p5.js Showcase!</h1>
    <p>Every year we ask the p5.js community to show us the work they have created and compile it in an online showcase - editorial style!</p>
    <Link to="/gallery2020" className="enter">Enter</Link>
    </div>
    </div>
  );
}

function Gallerynineteen() {
  const {Header, Content} = Layout;
return(      
  <div>
  <div className="body">
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
         <div class="row">
          {examples.map(i => (
             <Link
             key={i.id}
             to={{
               pathname: `/2019/${i.id}`,
             }}
           >
            <TestCard key={`card-${i}`} title={i.title} author={i.author} description={i.description} image={i.image}/>
            </Link>
          ))}
          </div>
          </div>

    </div>           
  );
}
function Gallerytwenty() {
  const {Header, Content} = Layout;
return(
    <h2>this section is still a work in progress!</h2>
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
