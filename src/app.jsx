import { useState, useCallback, useEffect } from "react";
import "./app.css";
import List from "./component/list/list";
import Page from "./component/page";
import Search from "./component/search/search";

function App({ pokemon }) {
  const [result, setResult] = useState();
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    pokemon
      .showList(0) //
      .then((list) => setList(list));
  }, []);

  const handleChange = (page) => {
    setPage(page);
    pokemon
      .showList((page - 1) * 20) //
      .then((list) => setList(list));
  };

  return (
    <div className="app">
      <Search pokemon={pokemon} />
      <List list={list} pokemon={pokemon} />
      <Page onChange={handleChange} />
    </div>
  );
}

export default App;
