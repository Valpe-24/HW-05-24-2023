import React from "react";

export const DisplayArray = ({ animalList }) => {
  let emojis = ["🐶", "🐱", "🐥", "🐄", "🐑", "🐎"];
  let animals = animalList.map( animal => emojis.map( emoji => <div>{emoji + animal}</div>));
  

  return (
    <div id="animal">
      <p>{animals}</p>
    </div>
  );
};

