import React from "react";
import "../styles/card.css";

const Card = ({ singer, index }) => {
  return (
    <div className="card-container">
      {/* {singers.map((singer, index) => (
        <section className="card-data" key={index}>
          <p className="name">{singer.name}</p>
          <p className="song">{singer.song}</p>
          <p className="album">{singer.album}</p>
        </section>
      ))} */}
      <section className="card-data" key={index}>
          <p className="name">{singer.name}</p>
          <p className="song">{singer.song}</p>
          <p className="song">{singer.date}</p>
          <p className="album">{singer.album}</p>
        </section>
    </div>
  );
};

export default Card;
