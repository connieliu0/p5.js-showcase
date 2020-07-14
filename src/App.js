import "./styles/App.css";
import { Layout, Row } from "antd";
import React, { Component }from "react";
import en from "./data/showcase2019.json";
import es from "./data/showcase2019-es.json";
import { openLink } from "./util";
import Details from "./Details.js"
import DisplayGallery from "./DisplayGallery.js"
import {useTranslation, Trans } from "react-i18next";
import i18next from 'i18next';


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
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };
    
  return (
    <Router>
          <div className="navigation">
            <NavBar language={i18next.languages[0]}/>
            <div className="right">
            <Link to="/es" className="item"><button onClick={() => changeLanguage('es')}>es</button></Link>
            <Link to ="/"><button onClick={() => changeLanguage('en')}>en</button></Link>
            </div>
          </div>
    <Switch>
    <Route exact path="/" children={<Gallerytwenty />}/>
    <Route exact path="/es" children={<Gallerytwenty />}/>
    <Route exact path="/gallery2019" children={<Gallerynineteen source={en} name="en"/>} />
    <Route path="/2019/:id" children={<DetailedPage source={en} />} />
    <Route exact path="/es/gallery2019" children={<Gallerynineteen source={es} name="es"/>} />
    <Route path="/es/2019/:id" children={<DetailedPage source={es} />} />
    <Route exact path="/about" children = {<About />}/>
    </Switch>{" "}
    </Router>
  );
}
function NavBar(props){
  if (props.language=="es"){
    return(
      <div>
      <Link to="/es" className="item">2020</Link>
      <Link to="/es/gallery2019" className="item">2019</Link>
      <Link to="/es/about" className="item">about</Link>
      <a href="https://p5js.org">p5.js</a>
      </div>
    );
  }
  else if (props.language=="en"){
    return(
      <div>
      <Link to="/" className="item">2020</Link>
      <Link to="/gallery2019" className="item">2019</Link>
      <Link to="/about" className="item">about</Link>
      <a href="https://p5js.org">p5.js</a>
      </div>
    );
  }
}

function About(){
  return(
    <div className="home1">
    <img src="/images/asterisk-01.png" alt="p5.js asterisk"/>
    <div className="home">
    <h1>What is the p5.js showcase?</h1>
    <p>Introducing Showcase, created by <a href="ashleykang.dev">Ashley Kang</a> in 2019 and currently curated by <a href="connieliu0.github.io">Connie Liu</a>. We're celebrating how people are using p5.js to make creative work, learning, and open source more interesting and inclusive. Together, we make community. During Summer 2019, we asked a few creators to share more about how they've used p5.js through different projects and pieces.</p>
    </div>
    </div>
  );
}

function Gallerynineteen(props){
return(      
  <div className="body">
    <h1>p5.js 2019 Showcase! </h1>
      <Trans i18nKey="Curated by">
          <p>
            Curated by{" "}<a target="_blank" rel="noopener noreferrer" href="https://ashleykang.dev/" >Ashley Kang</a>{" "}in the summer of 2019, below is the first ever curated collection of the p5.js showcase! We compiled different ways to use p5.js and learn more about each one by clicking on it.
         </p>
         </Trans>
        <DisplayGallery name={props.name} source={props.source}/>
          </div>
  );
}

function Gallerytwenty() {
return(
  <div className="body">
    <h1>Welcome to the p5.js 2020 Showcase!</h1>
    <h2>Full version is coming out at the end of August!</h2>
    </div>
  );
}

function DetailedPage(props) {
  let { id } = useParams();
  let piece = props.source.find(x=> x.id === id);

  if (!piece) return <div>Image not found</div>;

  return (
    <Details
    piece={piece}
    />
  );
}
