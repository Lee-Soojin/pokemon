import React, { useEffect, useState } from "react";
import Description from "../description/description";
import styles from "./card.module.css";

const Card = ({ pokemon }) => {
  const [description, setDescription] = useState({});
  const [id, setId] = useState(0);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [experience, setExperience] = useState("");
  const [show, setShow] = useState(false);
  const name = pokemon.name;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, requestOptions)
      .then((response) => response.json())
      .then(
        (result) => (
          setId(result["id"]),
          setHeight(result["height"]),
          setWeight(result["weight"]),
          setExperience(result["base_experience"])
        )
      );
  });

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
          <p className={styles.id}>ID #{id}</p>
          <p className={styles.card__pokemon_name}>{name}</p>
        </li>
      </ul>
      <div
        className={`${styles.description_container} ${
          show ? styles.visible : styles.invisible
        }`}
      >
        <Description
          id={id}
          height={height}
          weight={weight}
          experience={experience}
          name={name}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
