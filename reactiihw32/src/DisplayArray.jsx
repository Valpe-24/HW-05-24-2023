import React from "react";
import './DisplayArray.css'

export const DisplayArray = ({ animalList }) => {
  let animals = animalList.map( animal => <p className='animal'>{animal}</p>);
  

  return (
    <div id="animals">
      <ul>{animals}</ul>
    </div>
  );
};

