import "./styles/App.css";
import React, { Component }from "react";
import Details from "./Details.js"
//import DisplayGallery from "./DisplayGallery.js"
import {useTranslation, Trans } from "react-i18next";
import i18next from 'i18next';
import TestCard from "./TestCard.js";
import {Bar} from 'react-chartjs-2';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import Simple from './simple';


import {
  Switch,
  Route,
  Link,
  useParams,
  HashRouter
} from "react-router-dom";
export default function App() {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };
    
  return (
  <HashRouter basename='/'>
          <div className="navigation">
      <Link to="/" className="item">2020</Link>
       <Link to="/gallery2019" className="item">2019</Link>
       <Link to="/about" className="item">about</Link>
       <a href="https://p5js.org">p5.js</a>            <div className="right">
            <button onClick={() => changeLanguage('es')}>es</button>
            <button onClick={() => changeLanguage('en')}>en</button>
            </div>
          </div>
    <Switch>
    <Route exact path="/" children={<Gallerytwenty />}/>
    <Route exact path="/gallery2019" children={<Gallerynineteen/>} />
     <Route path="/2019/:id" children={<DetailedPage />}/>
    <Route exact path="/about" children = {<About />}/>
    </Switch>{" "}
    </HashRouter>
  );
}

function About(){
  var Markdown = require('react-markdown');
  const { t, i18n } = useTranslation();
  return(
    <div className="home1">
    <img src={process.env.PUBLIC_URL +'/images/asterisk-01.png'} alt="p5.js asterisk"/>
    <div className="home">
    <h1>{t('About')}</h1>
    <p><Markdown source = {t('AboutIntro')}/></p>
    </div>
    </div>
  );
}

function Gallerynineteen(){
  var Markdown = require('react-markdown');
  const { t, i18n } = useTranslation();
return(      
  <div className="body">
    <div className="gallery">
    <h1>p5.js 2019 Showcase!</h1>
    <h3><Markdown source={t('2019about')}/></h3>
      <Trans i18nKey="Curated by">
          <p>
         </p>
         </Trans>
         <div class="row">
      {t('showcase', {returnObjects: true}).map(({id, title, author, description, image})=>(
         <Link
         key={id}
         to={{
           pathname: `/2019/${id}/`,
         }}
       >
        <TestCard key={`card-${id}`} 
        title={title} 
        author={author} 
        description={description} 
        image={image}/>
        </Link>
      ))}
      </div>
      </div>
     </div>
  );
}

function Gallerytwenty() {
  const { t, i18n } = useTranslation();
return(
  <div className="body">
    <h1>{t('Welcome')}</h1>
    <h2>Full version is coming out at the end of August!</h2>
    <Simple />
    <P5Wrapper sketch={sketch} rotation="150"/> 
    </div>
  );
}

function DetailedPage() {
  let { id } = useParams();
  let entries= i18next.t('showcase', { returnObjects: true });
  let piece = entries.find(x=> x.id === id);

  if (!piece) return <div>Image not found</div>;

  return (
    <Details
    piece={piece}
    />
  );
}
