import React from 'react';
import './styles/App.css';
import tools from './data/tools.json';
import { useTranslation } from 'react-i18next';

const Details= ({piece}) => {
const {title, image, author, pronouns, resources, type, tools, qanda, location, socials}=piece;
const toolslinks = tools.split(",");
var Markdown = require('react-markdown');
const { t } = useTranslation();

return (
      <div className="detailsbody">
        <div className="row">
          <div className="details-image">
            <img
              src={
                require(`../public/images/${image}`)
              }
              alt={title}
            />
            </div>
            <div className="col">
                <h1>{title}</h1>
                <h2>{t('Created By')}</h2>
                <h3>{author} <span class="small">({pronouns}) from {location}</span></h3>
                <div class="row">{socials.map(i => (
                  <a href={i.link} target="_blank">{i.name}</a>
                ))}</div>
            <div className="row">
                <div className="col">
                  <h2>{t('Project Links')}</h2>
                  {resources.map(i => (
                  <a href={i.link} target="_blank">{i.name}</a>
                ))}
                </div>
                <div className="col">
                  <div>{(tools.length!==0)&&<h2>{t('Tools')}</h2>}</div>
                {toolslinks.map((tool, index) => {
                      const toolsinfo = {
                        link: toolslinks[tool] ? toolslinks[tool]: "https://p5js.org/"
                      };
                      return(
                        <a href={toolsinfo} target="_blank">{tool}</a>
                      );
                      })}
                </div>
            </div>
          </div>
          </div>
          <h1>Q and A</h1>
          <h2>{t('Question1')}</h2>
          <div id="answer1"></div> 
          <p>{<Markdown source={qanda.answer1}/>}</p>
          <h2>{t('Question2')}</h2>
          <p><Markdown source={qanda.answer2}/></p>
          <h2>{t('Question3')}</h2>
          <p><Markdown source={qanda.answer3}/></p>
          <h2>{t('Question4')}</h2>
          <p><Markdown source={qanda.answer4}/></p>
          <h2>{t('Question5')}</h2>
          <p><Markdown source={qanda.answer5}/></p>
      </div>
    );
  }


export default Details;
