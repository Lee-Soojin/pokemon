import React, { memo, useEffect, useState } from "react";
import Description from "../description/description";
import styles from "./card.module.css";

const Card = memo(({ item, pokemon }) => {
  const [character, setCharacter] = useState();
  const [show, setShow] = useState(false);
  const name = item.name;

  useEffect(() => {
    if (item) {
      pokemon
        .getData(name) //
        .then((res) => {
          setCharacter(res);
        });
    } else {
      return;
    }
  }, [pokemon, character]);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const onClick = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className={styles.card}>
      <img
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        alt={name}
      />
      <ul className={styles.card_name} onClick={handleClick}>
        <li className={styles.card_list}>
          <p className={styles.card__pokemon_name}>{name.toUpperCase()}</p>
        </li>
      </ul>
      <div
        className={`${styles.description_container} ${
          show ? styles.visible : styles.invisible
        }`}
      >
        {character && (
          <Description
            name={name}
            onClick={onClick}
            abilities={character["abilities"]}
            height={character["height"]}
            weight={character["weight"]}
            stats={character["stats"]}
            types={character["types"]}
          />
        )}
      </div>
    </div>
  );
});

export default Card;
