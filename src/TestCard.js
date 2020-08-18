import React from "react";

function TestCard (props){
  return (
    <div className="card2019">
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
    </div>
  );
};


export default TestCard;