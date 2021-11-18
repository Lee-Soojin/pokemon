import React, { useRef, useState } from "react";
import Description from "../description/description";
import styles from "./search.module.css";

const Search = (props) => {
  const searchRef = useRef();

  const [id, setId] = useState(0);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [abillities, setAbillities] = useState([]);
  const [experience, setExperience] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const onSearch = async (id) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
      requestOptions
    );
    const result = await response.json();
    setId(result["id"]);
    setHeight(result["height"]);
    setWeight(result["weight"]);

    setExperience(result["base_experience"]);
    setName(result["name"]);
    setShow(true);
    console.log(result);
  };

  const handleSearch = () => {
    const value = searchRef.current.value;
    console.log(value);
    onSearch(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className={styles.search}>
      <p className={styles.title}> Search </p>
      <form className={styles.search__form}>
        <input
          type="search"
          ref={searchRef}
          className={styles.search__input}
          placeholder="write id or name of pokemon"
          onKeyPress={handleKeyPress}
        />
      </form>
      <button
        className={styles.search__button}
        type="submit"
        onClick={handleClick}
      >
        🔍
      </button>
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

export default Search;
