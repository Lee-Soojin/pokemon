import React, { useRef, useState } from "react";
import Description from "../description/description";
import styles from "./search.module.css";

const Search = ({ pokemon }) => {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const [character, setCharacter] = useState();

  const handleSearch = () => {
    const value = inputRef.current.value;
    pokemon
      .search(value) //
      .then((res) => setCharacter(res));
    setShow(true);
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
  character && console.log(character);

  return (
    <div className={styles.search}>
      <p className={styles.title}> Search </p>
      <form className={styles.search__form}>
        <input
          type="search"
          ref={inputRef}
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
        {character && (
          <Description
            abilities={character["abilities"]}
            height={character["height"]}
            weight={character["weight"]}
            name={character["name"]}
            stats={character["stats"]}
            types={character["types"]}
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
