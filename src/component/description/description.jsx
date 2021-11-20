import React from "react";
import styles from "./description.module.css";
import { IoClose } from "react-icons/io5";

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
      <div className={styles.description__img_container}>
        <img
          src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          alt={name}
        />
      </div>
      <h3 className={styles.desc__name}> {name}</h3>
      <div className={styles.description__desc_container}>
        <div>
          <p className={styles.desc__title}>Height</p> <p> {height} m</p>
        </div>
        <div>
          <p className={styles.desc__title}>Weight</p> <p> {weight} lbs</p>
        </div>

        <div>
          <p className={styles.desc__title}>Abilities</p>
          {abilities &&
            abilities.map((ability) => (
              <p className={styles.desc_ability}>{ability}</p>
            ))}
        </div>

        <div>
          <p className={styles.desc__title}>Types</p>
          {types &&
            types.map((type) => <p className={styles.desc_types}>{type}</p>)}
        </div>
      </div>

      <button onClick={onClick}>
        <IoClose />
      </button>
    </div>
  );
};

export default Description;
