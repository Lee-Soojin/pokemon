import { useEffect } from "react";
import "./app.css";
import List from "./component/list/list";
import Search from "./component/search/search";

function App() {
  return (
    <div className="app">
      <Search />
      <List />
    </div>
  );
}

export default App;
