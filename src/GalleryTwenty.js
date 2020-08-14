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


function GalleryTwenty (props){
  var Markdown = require('react-markdown');
  const { t, i18n } = useTranslation(); 
  const [filtered, setFilter] = useState('All');
  const filtermap=(t('filters', {returnObjects: true}));
  const filterList = filtermap.map(({name}) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={{name} === filtered}
      setFilter={setFilter}
    />
  ));
  var showcase2020 = (filtered==='All')?t('showcase2020', {returnObjects: true}): t('showcase2020', {returnObjects: true}).filter((a)=>a.type ===filtered);
  return (
    <div className="body">
    <h1 className="special">2020 p5.js Showcase</h1>
    <h3>{<Markdown source={t('2020Gallery_Intro')}/>}</h3>
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