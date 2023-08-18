import React from "react";
import "../styles/card.css";
import { useState } from "react";

const Card = ({ singers }) => {
  const [name, setName] = useState(singers);

  return (
    <div className="card-container">
      {singers.map((singer, index) => (
        <section className="card-data" key={index}>
          <p className="name">{singer.name}</p>
          <p className="song">{singer.song}</p>
          <p className="album">{singer.album}</p>
        </section>
      ))}
    </div>
  );
};

export default Card;
