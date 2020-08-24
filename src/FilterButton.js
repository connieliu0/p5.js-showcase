import React from "react";

export default function FilterButton(props) {

    return (
      <button
        type="button"
        aria-pressed={props.isPressed}
        id={props.id}
        className={props.className}
        onClick={() => props.setFilter(props.name)}
      >
        <span>{props.displayName}</span>
      </button>
    );
  }