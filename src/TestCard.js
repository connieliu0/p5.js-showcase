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
  const { Meta } = Card;

  return (
    
    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 8 }}>
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={
          <div style={{ overflow: "hidden" }}>
            <img
              src={
                require(`./images/${props.image}`)
              }
              alt={props.title}
              className="Card-image"
            />
          </div>
        }
      
      >
        <Meta
          title={
            <div className="Name">
              {props.title}<br></br>
              {props.author}
            </div>
          }
          description={<div className="Description">{props.description}</div>}
        />
    { 
    // <Popup
    //   trigger={<button className="button"> Open Modal </button>}
    //   modal
    //   closeOnDocumentClick
    // >
    //   <span> <Details 
    //   title = {title}
    //   description = {description}
    //   /> </span>
    // </Popup>
  }
        
      </Card>
    </Col>
  );
};


export default TestCard;