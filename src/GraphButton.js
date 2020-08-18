import React from "react";

function GraphButton (props){
  return (
    <button
    type="button"
    // aria-pressed={props.isPressed}
    id={props.id}
    className={props.className}
    onClick={() => { props.showGraph(true); props.otherGraph(false);}}
  ><span>{props.buttonname}</span>
  </button>

  );
};


export default GraphButton;