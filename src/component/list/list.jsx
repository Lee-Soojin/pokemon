import React, { useEffect, useState } from "react";
import Card from "../card/card";
import styles from "./list.module.css";
import "./list.css";
import pokemon_title from "../../img/pokemon_title.png";
import Pagination from "react-js-pagination";

const List = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
    console.log(page * 60);
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=600`, requestOptions)
      .then((response) => response.json())
      .then((result) => setPokemons(result.results))
      .catch((error) => console.log("error", error));
  }, [page]);

  return (
    <div className={styles.list}>
      <img src={pokemon_title} alt="title" />
      {pokemons.map((pokemon) => (
        <Card pokemon={pokemon} />
      ))}

      <Pagination
        activePage={page}
        itemsCountPerPage={60}
        totalItemsCount={600}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default List;
