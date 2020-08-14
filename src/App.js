import "./styles/App.css";
import React, { Component }from "react";
import Details from "./Details.js"
import {useTranslation, Trans } from "react-i18next";
import i18next from 'i18next';
import TestCard from "./TestCard.js";
import {Bar} from 'react-chartjs-2';
import P5Wrapper from 'react-p5-wrapper';
import Simple from './map/simple';
import TestCard2020 from './TestCard2020.js';
import GalleryTwenty from './GalleryTwenty.js';
import { HashLink } from 'react-router-hash-link';
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
      <Link to="/" className="item">Visualizations</Link>
      <Link to="/gallery2020" className="item">Gallery</Link>
       <Link to="/gallery2019" className="item">2019</Link>
       <Link to="/about" className="item">about</Link>
       <a href="https://p5js.org">p5.js</a>           
        <div className="right">
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('es')}>Español</button>
            <button onClick={() => changeLanguage('zh')}>简体中文</button>
            </div>
          </div>
    <Switch>
    <Route exact path="/" children={<Gallerytwenty />}/>
    <Route exact path="/gallery2019" children={<Gallerynineteen/>} />
     <Route path="/2019/:id" children={<DetailedPage />}/>
     <Route exact path="/gallery2020" children = {<GalleryTwenty />}/>
    <Route exact path="/about" children = {<About />}/>
    </Switch>{" "}
    </HashRouter>
  );
}

function About(){
  var Markdown = require('react-markdown');
  const { t, i18n } = useTranslation();
  return(
    <div className="home">
    <h1><img src={process.env.PUBLIC_URL +'/images/asterisk-01-01.png'} alt="p5.js asterisk"/>
    {t('About1')}</h1>
    <p><Markdown source = {t('Answer1')}/></p>
    <h1><img src={process.env.PUBLIC_URL +'/images/asterisk-01-01.png'} alt="p5.js asterisk"/>
    {t('About2')}</h1>
    <p><Markdown source = {t('Answer2')}/></p>
    <h1><img src={process.env.PUBLIC_URL +'/images/asterisk-01-01.png'} alt="p5.js asterisk"/>{t('About3')}</h1>
    <p><Markdown source = {t('Answer3')}/></p>
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
         <div class="row">
      {t('showcase2019', {returnObjects: true}).map(({id, title, author, description, image})=>(
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
    <div className="flex">
    <div className="column">
      <h1>{t('Welcome')}</h1>
      <p>Curated by Connie Liu</p>
    </div>
    <div className="column">
      <h3>For Summer 2020 we asked the p5.js community around the world to submit their pieces for a new and expanded edition of the showcase. </h3>
        <h2>Learn more about the p5.js community below!</h2>
        <h2>Jump to:</h2>
      <h2><HashLink to="#twentyviz">Foreword</HashLink> | <Link to="/gallery2020">Projects</Link></h2>
    </div>
    </div>
    <div id="twentyviz"className="twentyviz">
    <h1>this year we got submissions from...</h1>
    <Simple />
    <h1>Our submitters are...</h1>
    <div class="row">
      {t('showcase2020', {returnObjects: true}).map(({author, pronouns,title, description, live, code, type, tools, social, id})=>(
         <Link
         key={id}
         to={{
           pathname: `/2020/${id}/`,
         }}
       >
        <TestCard2020 key={`card-${id}`} 
        title={title} 
        author={author} 
        pronouns={pronouns}
        description={description} 
        live={live}
        code={code}
        type={type}
        tools={tools}
        social={social}
        id={id}
        />
        </Link>
      ))}
      </div>
    <h1>to them p5.js is...</h1>
    </div>
    </div>
  );
}

function DetailedPage() {
  let { id } = useParams();
  let entries= i18next.t('showcase2019', { returnObjects: true });
  let piece = entries.find(x=> x.id === id);

  if (!piece) return <div>Image not found</div>;

  return (
    <Details
    piece={piece}
    />
  );
}
