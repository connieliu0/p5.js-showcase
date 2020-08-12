import TestCard2020 from './TestCard2020.js';
import React, { Component,useState }from "react";
import {useTranslation} from "react-i18next";
import "./styles/App.css";
import FilterButton from "./FilterButton.js";
import Details from "./Details.js"
import {
  Switch,
  Route,
  Link,
  useParams,
  HashRouter
} from "react-router-dom";
const FILTER_MAP = {
  All: () => true,
  Art: type => 'Art',
};

const FILTER_NAMES = Object.keys(FILTER_MAP);


function GalleryTwenty (props){
  const [filter, setFilter] = useState('All');
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  const { t, i18n } = useTranslation(); 
  return (
    <div className="body">
    <h1 className="special">2020 p5.js Showcase</h1>
    {filterList}
    <div className="gallery">
<div class="row">
      {t('showcase2020', {returnObjects: true})
        .filter(FILTER_MAP[filter])
      .map(({author, pronouns,title, description, live, code, type, tools, social, id})=>(
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