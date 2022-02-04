import React from "react";

function ToyCard({toy, deleteToy, likeToy}) {
  
  return (
    <div className="card">
      <h2>{toy.name /* Toy's Name */}</h2>
      <img
        src={toy.image /* Toy's Image */}
        alt={toy.name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{toy.likes /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={()=> likeToy(toy)}  >Like {"💕"}</button>
      <button className="del-btn"  onClick={()=> deleteToy(toy.id)} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
