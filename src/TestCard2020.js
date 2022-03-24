import React from "react";
import toolslist from "./data/tools.json";
import ClampLines from "react-clamp-lines";
import { useTranslation } from "react-i18next";

import beginnerIcon from "./images/beginner.svg";
import intermediateIcon from "./images/intermediate.svg";
import advancedIcon from "./images/advanced.svg";

import runCodeButton from "./images/codebutton.svg"
import demoButton from "./images/DemoButton.svg"

import sampleProfilePic from "./images/sampleProfilePic.png";

import { Link } from "react-router-dom";
function TestCard2020(props) {
  const { t, i18n } = useTranslation();
  const toolslisted = toolslist;
  const toolslinks = props.tools.split(",");
  return (
    <div className="card2021">
      {console.log(props)}
      
      <img className="dif-level" src={intermediateIcon} />
      <div className="over-image-btn">
      <a  href={props.code}>
      <img src={runCodeButton} />
      </a>
      <a href={props.live}>
      <img src={demoButton} />
      </a>
      </div>
      <Link className="card-image"
         key={props.id}
         to={{
           pathname: `/2020-${props.filter}/${props.id}/`
         }}
      >
      <img
        className="card-image"
        src={require(`../public/2020images/${props.picid}`)}
      />
      </Link>
      <div className="innerCard">
        <h3>{props.title}</h3>
        <p className="description">{props.description.slice(0, 180) + "..."}</p>
          {toolslinks.length > 1 && (
            <div>
              
              <span>Tags</span>
              <div className="tags2021">
              
              {toolslinks.map((tool, index) => {
                return ( index < 2 &&
                  <ul key={index}>
                    {tool.length !== 0 && (
                      <li>
                        <a href={toolslisted[tool]} target="_blank">
                          {tool}
                        </a>
                      </li>
                    )}
                  </ul>
                );
              })}
              </div>
            </div>
          )}
        <hr/>
        <div className="author-section">
          <div className="author-img-div">
            <img className="author-img" src={sampleProfilePic} />
          </div>
          <div className="author-details">
            <span className="authorName">{props.author}</span>
            <span className="author-link">
              <a href={props.social.split(",")[0]}>
                {props.social.split(",")[0].slice(0, 30) + ".."}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCard2020;

// <div className="bigcard">
// <div className="cardimage">
// <Link
  //  key={props.id}
  //  to={{
  //    pathname: `/2020-${props.filter}/${props.id}/`
  //  }}>
//       <img
//         src={
//           require(`../public/2020images/${props.picid}`)
//         }
//         alt={props.title}
//         className="Card-image"
//       />
//     </Link>
// </div>
// <div className="Name2020">
// <Link
//    key={props.id}
//    to={{
//      pathname: `/2020-${props.filter}/${props.id}/`
//    }}>
//   <h2>{props.title}</h2>
//   <h2><em>{props.author}</em></h2>
//   </Link>
// </div>
// <div className="links">
// {(props.code.length!==0)?<a href={props.live} target="_blank"><div className="box">{t('Live')}</div></a>:<a href={props.live} target="_blank"><div className="box full">{t('Live')}</div></a>}
// {(props.code.length!==0)&&<a href={props.code} target="_blank"><div className="box">{t('Code')}</div></a>}
// </div>
//   <div className="Description2020">
//   <ClampLines
//     text={props.description}
//     id="custom"
//     lines={4}
//     className="custom-class"
//     ellipsis="..."
//     buttons={false}
//     innerElement="span" />
//     </div>
//    {(toolslinks.length!==0)&&<div className="tags">
// {toolslinks.map((tool, index) => {
//   return(
//     <ul>
//       {(tool.length!==0)&&<li><a href={toolslisted[tool]} target="_blank">{tool}</a></li>}
//       </ul>
//      );
//      })}
//       </div>}
// </div>
