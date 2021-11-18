import React, { useRef } from "react";
import styles from "./search.module.css";

const Search = (props) => {
  const searchRef = useRef("");

  return (
    <div className={styles.search}>
      <form>
        <input type="text" ref={searchRef} />
      </form>
    </div>
  );
};

export default Search;
