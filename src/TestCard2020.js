import React from "react";
import toolslist from './data/tools.json';
import ClampLines from 'react-clamp-lines';
import { useTranslation } from 'react-i18next';
import {
  Link,
} from "react-router-dom";
function TestCard2020 (props){
  const { t, i18n } = useTranslation();
  const toolslisted=toolslist;
    const toolslinks = props.tools.split(",");
  return ( 
    <div className="card2020">
    <div className="bigcard">
      <div className="cardimage">
      <Link
         key={props.id}
         to={{
           pathname: `/2020/${props.id}/`
         }}>
            <img
              src={
                require(`../public/2020images/${props.picid}`)
              }
              alt={props.title}
              className="Card-image"
            />      </Link>

      </div>

      <div className="Name2020">
        <h2>{props.title}</h2>
        <a href={props.social}><h2><em>{props.author}</em></h2></a>
      </div>
      <div className="links">
      <a href={props.live} target="_blank">{t('Live')}</a>
      <a href={props.code} target="_blank">{t('Code')}</a>
      </div>
        <div className="Description2020">
        <ClampLines
          text={props.description}
          id="custom"
          lines={4}
          className="custom-class"
          ellipsis="..."
          buttons={false}
          innerElement="span" />
          </div>
         {(toolslinks.length!==0)&&<div className="tags">
    {toolslinks.map((tool, index) => {
        return(
          <ul>
            {(tool.length!==0)&&<li><a href={toolslisted[tool]} target="_blank">{tool}</a></li>}
            </ul>
           );
           })}
            </div>}
    </div>
    </div>
  );
};


export default TestCard2020;