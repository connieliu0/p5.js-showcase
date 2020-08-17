import "./styles/App.css";
import React, { Component }from "react";
import Details from "./Details.js"
import Details2020 from "./Details2020.js"
import {useTranslation, Trans } from "react-i18next";
import i18next from 'i18next';
import TestCard from "./TestCard.js";
import {Bar} from 'react-chartjs-2';
import P5Wrapper from 'react-p5-wrapper';
import Simple from './map/simple';
import GalleryTwenty from './GalleryTwenty.js';
import { HashLink } from 'react-router-hash-link';
import {
  Switch,
  Route,
  Link,
  useParams,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
export default function App() {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };
    
  return (
    <HashRouter basename='/'>          <div className="navigation">
      <Link to="/" className="item">Foreword</Link>
      <Link to="/gallery2020" className="item">Gallery</Link>
       <Link to="/gallery2019" className="item">2019</Link>
       <Link to="/about" className="item">About</Link>
       <a href="https://p5js.org">p5.js</a>           
        <div className="right">
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('es')}>Español</button>
            <button onClick={() => changeLanguage('zh_Hans')}>简体中文</button>
            </div>
          </div>
    <Switch>
    <Route exact path="/" children={<Gallerytwenty />}/>
    <Route exact path="/gallery2019" children={<Gallerynineteen/>} />
     <Route exact path="/2019/:id" children={<DetailedPage />}/>
     <Route exact path="/gallery2020" children = {<GalleryTwenty />}/>
     <Route exact path="/2020/:id" children={<Detailed2020Page/>}/>
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
    <h3><Markdown source = {t('Answer1')}/></h3>
    <h1><img src={process.env.PUBLIC_URL +'/images/asterisk-01-01.png'} alt="p5.js asterisk"/>
    {t('About2')}</h1>
    <h3><Markdown source = {t('Answer2')}/></h3>
    <h1><img src={process.env.PUBLIC_URL +'/images/asterisk-01-01.png'} alt="p5.js asterisk"/>{t('About3')}</h1>
    <h3><Markdown source = {t('Answer3')}/></h3>
    <h1><img src={process.env.PUBLIC_URL +'/images/asterisk-01-01.png'} alt="p5.js asterisk"/>{t('Acknowledgements')}</h1>
    <h3><Markdown source = "I'd like to thank [GSoC](https://summerofcode.withgoogle.com/) and the [Processing Foundation](https://processingfoundation.org/) for funding this project. I'd also like to thank my wonderful mentors Yining Shi and Joey Lee for helping me. Finally I'd like to thank Lauren McCarthy, Saber Khan, Inhwa Yeom, Aarón Montoya-Moraga and the p5 maintainers and contributors for helping me out on my open source journey and this project."/></h3>
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
  var Markdown = require('react-markdown');
  const { t, i18n } = useTranslation();
return(
  <div className="body">
    <div className="flex">
    <div className="column">
      <h1 className="intro2020">{t('Welcome')}</h1>
      <p><em>{t('Created By')} Connie Liu</em></p>
      <h2>{t('Jump to')}<HashLink to="#twentyviz"> {t('Visualizations')}</HashLink> | <Link to="/gallery2020">{t('Projects')}</Link></h2>
    </div>
    <div className="column">
      <h3>{t('2020_intro1')}</h3>
      <h3><Markdown source={t('2020_intro1.5')}/></h3>
        <h2>{t('2020_intro2')}</h2>
          </div>
    </div>
    <div className="twentyviz">
    <h1>{t('Viz1')}</h1>
    <Simple />
    <h1>{t('Viz2')}</h1>
    <h1>{t('Viz3')}</h1>
    <h1><a href="https://connieliu0.github.io/p5.js-showcase/#/gallery2020">{t('Viz4')}</a></h1>
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

function Detailed2020Page() {
  let { id } = useParams();
  let entries= i18next.t('showcase2020', { returnObjects: true });
  let piece = entries.find(x=> x.id === id);

  if (!piece) return <div>Image not found</div>;

  return (
    <Details2020
    piece={piece}
    />
  );
}