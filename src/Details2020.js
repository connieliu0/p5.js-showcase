import React from 'react';
import './styles/App.css';
import toolslist from './data/tools.json';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './ScrollToTop.js';
import {
  Link
} from "react-router-dom";
const Details2020= ({piece}) => {
const {title, description, extradesc, id, picid, author, pronouns, type, tools, qanda, location, social, live, code, answer1, answer2, answer3, answer4, answer5, answer6}=piece;
const toolslinks = tools.split(",");
const sociallinks = social.split(",");
var Markdown = require('react-markdown');
const { t } = useTranslation();
const toolslisted=toolslist;
return (
      <div className="detailsbody">
          <ScrollToTop/>
        <div className="row">
          <div className="details-image">
          <img
              src={
                require(`../public/2020images/${picid}`)
              }
              alt={title}
              className="Card-image"
            />
            
            </div>
            <div className="col">
                <h1>{title}</h1>
                <h2 className="short">{t('Created By')}</h2>
                <h3>{author} <span class="small">({pronouns}) from {location}</span></h3>
                <div class="row"> 
                {(social.length!==0)&&
                sociallinks.map((so, index)=>{
                  return(
                    <a href={so}>{t('Social Media')}</a>
                  );})}
                </div>
            <div className="row">
                <div className="col">
                  <h2>{t('Project Links')}</h2>
                  <a href={live} target="_blank">{t('Live')}</a>
                  {(code.length!==0)&&<a href={code} target="_blank">{t('Code')}</a>}
                </div>
                <div className="col">
                  <div>{(tools.length!==0)&&<h2>{t('Tools')}</h2>}</div>
                {toolslinks.map((tool, index) => {
                      return(
                        <a href={toolslisted[tool]} target="_blank">{tool}</a>
                      );
                      })}
                </div>
            </div>
          </div>
          </div>
          <p>{<Markdown source={description}/>}</p>
          <p>{<Markdown source={extradesc}/>}</p>

          <div className="QnA">
          <h1>Q and A</h1>
          <h2>{t('Question1')}</h2>
          <div id="answer1"></div> 
          <p>{<Markdown source={answer1}/>}</p>
          <p><Markdown source={answer2}/></p>
          {(answer3.length!==0)&&<h2>{t('Question2')}</h2>}
          <p><Markdown source={answer3}/></p>
          {(answer4.length!==0)&&<h2>{t('Question3')}</h2>}
          <p><Markdown source={answer4}/></p>
          {(answer5.length!==0)&&<h2>{t('Question4')}</h2>}
          <p><Markdown source={answer5}/></p>
          {(answer6.length!==0)&&<h2>{t('Question5')}</h2>}
          <p><Markdown source={answer6}/></p>
          </div>
          <div className="center">
          <Link to="/gallery2020-All">← Back to Gallery</Link>
          </div>
      </div>
    );
  }


export default Details2020;
