import React, { useRef, useState } from "react";
import Description from "../description/description";
import styles from "./search.module.css";

const Search = ({ onSearch }) => {
  const inputRef = useRef();
  const [show, setShow] = useState(false);

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
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
        <Description
          // id={id}
          // height={height}
          // weight={weight}
          // experience={experience}
          // name={name}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Search;
