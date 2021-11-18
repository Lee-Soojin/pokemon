import React, { useState } from "react";
import styles from "./description.module.css";

const Description = ({
  name,
  id,
  height,
  weight,
  abillities,
  experience,
  onClick,
}) => {
  return (
    <div className={styles.description}>
      <img
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        alt={name}
      />
      <div>
        <p className={styles.desc__name}>Name: {name}</p>
        <p className={styles.desc__id}>ID: {id}</p>
        <p className={styles.desc__height}>Height: {height}</p>
        <p className={styles.desc__weight}>Weight: {weight}</p>
        <p className={styles.desc__experience}>Experience: {experience}</p>
        <p>Abtillites</p>
        {abillities &&
          Object.keys(abillities).map((ab) => (
            <p className={styles.desc__abillity}>Abillity: {ab.abillity}</p>
          ))}
      </div>

      <button onClick={onClick}>❌close❌</button>
    </div>
  );
};

export default Description;
