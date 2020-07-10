import { Card, Col, Row, Tag } from "antd";
import React from "react";
import Popup from "reactjs-popup";
import Details from "./Details.js";
import { openLink } from "./util";
import Title from "antd/lib/skeleton/Title";

const TAGS = {
  FaceAPI: {
    color: "magenta",
    link: "https://learn.ml5js.org/docs/#/reference/face-api",
  },
  FeatureExtractor: {
    color: "orange",
    link: "https://learn.ml5js.org/docs/#/reference/feature-extractor",
  },
  ImageClassifier: {
    color: "green",
    link: "https://learn.ml5js.org/docs/#/reference/image-classifier",
  },

};


function TestCard (props){
  //const modelTags = props.qanda.split(",");
  return (
    <div className="bigcard">
      <div className="cardimage">
            <img
              src={
                require(`../public/images/${props.image}`)
              }
              alt={props.title}
              className="Card-image"
            />
      </div>
      <div className="Name">
        <h2>{props.title}</h2>
        <h2><em>{props.author}</em></h2>
      </div>
          <div className="Description">{props.description}</div>
    </div>
  );
};


export default TestCard;