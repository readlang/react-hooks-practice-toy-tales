import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {DBData, deleteToy, likeToy} ) {
  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */
      DBData.map(toy => ( <ToyCard key={toy.id} toy={toy} deleteToy={deleteToy} likeToy={likeToy} /> ))
    }</div>
  );
}

export default ToyContainer;
