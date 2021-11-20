import React from "react";
import styles from "./description.module.css";

const Description = ({
  name,
  onClick,
  abilities,
  height,
  weight,
  stats,
  types,
}) => {
  return (
    <div className={styles.description}>
      <img
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        alt={name}
      />
      <div>
        <p className={styles.desc__name}>Name: {name}</p>
        <p>Height: {height} m</p>
        <p>Weight: {weight} lbs</p>
        <p>Abilities : </p>
        {abilities && abilities.map((ability) => <p>{ability}</p>)}
        <p>Types:</p>
        {types && types.map((type) => <p>{type}</p>)}
      </div>

      <button onClick={onClick}>❌close❌</button>
    </div>
  );
};

export default Description;
