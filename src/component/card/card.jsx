import React from "react";
import styles from "./card.module.css";

const Card = (pokemon) => {
  return (
    <div className={styles.card}>
      <p>{pokemon.name}</p>
    </div>
  );
};

export default Card;
