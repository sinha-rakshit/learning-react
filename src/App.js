import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=5c13dbf3";

const App = () => {
  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    SearchMovies("SpiderMan");
  }, []);
  return (
    <div className="app">
      <h1>MovieHub </h1>
      <div className="search">
        <input
          placeholder="Search For Movies"
          value="RockStar"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" />
      </div>
    </div>
  );
};

export default App;
