import React from "react";
import Card from "../card/card";
import styles from "./list.module.css";

const List = ({ list, pokemon }) => {
  return (
    <div className={styles.list}>
      {list.map((item) => (
        <Card item={item} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default List;
