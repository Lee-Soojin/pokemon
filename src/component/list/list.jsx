import React, { useEffect, useState } from "react";
import Card from "../card/card";
import styles from "./list.module.css";

const List = (props) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://pokeapi.co/api/v2/pokemon/", requestOptions)
      .then((response) => response.json())
      .then((result) => setPokemons(result.results))
      .catch((error) => console.log("error", error));
  });

  return (
    <div className={styles.list}>
      <h1>List</h1>
      {pokemons.map((pokemon) => {
        <Card pokemon={pokemon} />;
      })}
    </div>
  );
};

export default List;
