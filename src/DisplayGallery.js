import React from 'react';
import './styles/App.css';
import tools from './data/tools.json';
import { useTranslation } from 'react-i18next';
import TestCard from "./TestCard.js";

import {
    Link
  } from "react-router-dom";

function DisplayGallery(props){
  const name=props.name;
  if (name=="es"){
    return(
      <div class="row">
      {props.source.map(i => (
         <Link
         key={i.id}
         to={{
           pathname: `/es/2019/${i.id}/`,
         }}
       >
        <TestCard key={`card-${i}`} 
        title={i.title} 
        author={i.author} 
        description={i.description} 
        image={i.image}/>
        </Link>
      ))}
      </div>
  )}
  else {
    return(
      <div class="row">
      {props.source.map(i => (
         <Link
         key={i.id}
         to={{
           pathname: `/2019/${i.id}`,
         }}
       >
        <TestCard key={`card-${i}`} 
        title={i.title} 
        author={i.author} 
        description={i.description} 
        image={i.image}/>
        </Link>
      ))}
      </div>
    );
}}
export default DisplayGallery;
