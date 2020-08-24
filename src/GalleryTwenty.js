import TestCard2020 from './TestCard2020.js';
import React, {useState }from "react";
import {useTranslation} from "react-i18next";
import "./styles/App.css";
import FilterButton from "./FilterButton.js";
import ScrollToTop from "./ScrollToTop.js"
import {
  Switch,
  Route,
  Link,
  useParams,
  HashRouter
} from "react-router-dom";

const filterPathnames = [
  'All',
  'Visual',
  'Data Visualization',
  'Game',
  'World',
  'Text',
  'Sound',
  'Educational',
  'Teaching',
  'Simulation',
  'Tool',
  'Camera',
];

function GalleryTwenty (props){
  ScrollToTop();
  var Markdown = require('react-markdown');
  const { t, i18n } = useTranslation(); 
  const [filtered, setFilter] = useState('All');
  const filtermap=(t('filters', {returnObjects: true}));

  var showcase2020 = (filtered==='All')?t('showcase2020', {returnObjects: true}): t('showcase2020', {returnObjects: true}).filter((a)=>
 (a.type===filtered?a.type
  :a.type[0]===filtered?a.type[0]
  :a.type[1]===filtered?a.type[1]
  :a.type[2]===filtered?a.type[2]:
  null)
  );

  const filterList = filtermap.map(({name}, index) => (
    <Link
    key={filterPathnames[index]}
    to={{
      // Use english filter name in the url pathname
      pathname: `/gallery2020-${filterPathnames[index]}/`
    }}>
      <FilterButton
      key={filterPathnames[index]}
      name={filterPathnames[index]}
      displayName={name}
      isPressed={filterPathnames[index] === filtered}
      setFilter={setFilter}
      id={filterPathnames[index]==="Data Visualization"?"Data":filterPathnames[index]}
      className={filterPathnames[index]===filtered?'active':''}
    />
    </Link>
  ));


  return (
    <div className="body">
    <div className="intro2020">
    <h1>p5.js 2020 Showcase</h1>
    <h3><em>{<Markdown source={t('2020Gallery_Intro')}/>}</em></h3>
    </div>
    <div className="filterlist">
      <h2>{t("filter by")}:</h2>{filterList}</div>
    <div className="gallery">
<div class="row">
  {showcase2020.map(({author,title, description, live, code, type, tools, social, id,picid})=>(
        <TestCard2020 key={`card-${id}`} 
        title={title} 
        author={author} 
        description={description} 
        live={live}
        code={code}
        type={type}
        tools={tools}
        social={social}
        id={id}
        picid={picid}
        />
      ))}
      </div>
      </div></div>
      );
}
      export default GalleryTwenty;