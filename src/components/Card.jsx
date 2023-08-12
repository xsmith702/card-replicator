import React from 'react';
import "../styles/card.css";
import singers from "../../src/data.js";

const {name, song, album} = singers;

const Card = () => {
  return (
    <div>
      <section className="card-container">
        <p className="name">{name}</p>
        <p className="song">{song}</p>
        <p className="album">{album}</p>
      </section>
    </div>
  );
}

export default Card;