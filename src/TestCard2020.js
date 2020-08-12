import React from "react";
import Details from "./Details.js";
import tools from './data/tools.json';

function TestCard2020 (props){
    const toolslinks = props.tools.split(",");
  return (
    <div className="bigcard">
      <div className="cardimage">
            <img
              src={
                require(`../public/2020images/${props.id}.jpg`)
              }
              alt={props.title}
              className="Card-image"
            />
      </div>
      <div className="Name">
        <h2>{props.title}</h2>
        <a href={props.social}><h2><em>{props.author}({props.pronouns})</em></h2></a>
      </div>
      <div className="links">
      <a href={props.live}>Live</a>
      <a href={props.code}>Code</a>
      </div>
        <div className="Description">{props.description}</div>
      <div>

    <div className="tags">
        {toolslinks.map((tool, index) => {
            const toolsinfo = {
            link: toolslinks[tool] ? toolslinks[tool]: "https://p5js.org/"
            };
            return(
            <ul>
            <li><a href={toolsinfo} target="_blank">{tool}</a></li>
            </ul>
            );
            })}
            </div>
</div>
    </div>
  );
};


export default TestCard2020;