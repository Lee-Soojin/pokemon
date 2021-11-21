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
      <h3 className={styles.desc__name}> {name.toUpperCase()}</h3>
      <div className={styles.description__desc_container}>
        <div className={styles.desc__container}>
          <div>
            <p className={styles.desc__title}>Height</p>
            <p className={styles.desc_height}> {height} m</p>
          </div>
          <div>
            <p className={styles.desc__title}>Weight</p>
            <p className={styles.desc_weight}> {weight} lbs</p>
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
        <div className={styles.desc__stat_container}>
          {stats &&
            stats.map((stat) => (
              <div className={styles.desc__stat}>
                <span className={styles.stat_name}>
                  {stat.name.toUpperCase()}
                </span>
                <div className={styles.stat_bar}>
                  <div
                    className={styles.stat_value}
                    style={{ width: `${stat.base_stat}%` }}
                  ></div>
                </div>
                <span className={styles.stat_base_stat}>{stat.base_stat}</span>
              </div>
            ))}
        </div>
      </div>

      <button onClick={onClick}>
        <IoClose />
      </button>
    </div>
  );
};

export default Description;
