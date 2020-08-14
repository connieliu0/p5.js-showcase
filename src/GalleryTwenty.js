import TestCard2020 from './TestCard2020.js';
import React, { Component,useState }from "react";
import {useTranslation} from "react-i18next";
import "./styles/App.css";
import FilterButton from "./FilterButton.js";
import {
  Switch,
  Route,
  Link,
  useParams,
  HashRouter
} from "react-router-dom";
const FILTER_MAP = {
  All: () => true,
  Visual: type => 'Visual', 
  DataViz: type => 'Data Visualization',
  Game: type => 'Game',
  World: type => 'World',
  Text: type => 'Text',
  Sound: type => 'Sound',
  Educational: type => 'Educational',
  Teaching: type => 'Teaching',
  Simulation: type => 'Simulation',
  Tool: type => 'Tool',
  Camera: type => 'Camera'
};

const FILTER_NAMES = Object.keys(FILTER_MAP);


function GalleryTwenty (props){
  const [filtered, setFilter] = useState('All');
  console.log(filtered);
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filtered}
      setFilter={setFilter}
    />
  ));
  const { t, i18n } = useTranslation(); 
  var showcase2020 = (filtered==='All')?t('showcase2020', {returnObjects: true}): t('showcase2020', {returnObjects: true}).filter((a)=>a.type ===filtered);
  return (
    <div className="body">
    <h1 className="special">2020 p5.js Showcase</h1>
    <div className="filterlist">
      <h2>filter by:</h2>
      {filterList}</div>
    <div className="gallery">
<div class="row">
  {showcase2020.map(({author, pronouns,title, description, live, code, type, tools, social, id})=>(
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
      </div></div>
      );
}
      export default GalleryTwenty;