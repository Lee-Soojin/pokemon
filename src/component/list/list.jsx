import React from "react";
import Card from "../card/card";
import styles from "./list.module.css";
import "./list.css";
import pokemon_title from "../../img/pokemon_title.png";

const List = ({ list, pokemon }) => {
  return (
    <div className={styles.list}>
      <img src={pokemon_title} alt="title" className={styles.list__title} />
      {list.map((item) => (
        <Card item={item} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default List;
