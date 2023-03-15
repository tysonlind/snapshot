import { useState, useEffect } from "react";
import PhotoBoard from "./components/PhotoBoard";
import SearchBar from "./components/SearchBar";
import SavedSearches from "./components/SavedSearches";

function App() {
  let [list, setList] = useState([]);
  let [query, setQuery] = useState("");
  let [savedSearches, setSavedSearches] = useState([]);

  const searchBar = document.querySelector("#searchBar");
  const setSearchTerms = (e) => {
    e.preventDefault();
    setQuery(searchBar.value);
  }
  
  //may be issues here

  const setQueryFromSavedSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  useEffect(() => {
    fetch("http://localhost:5000" + "?" + new URLSearchParams({
      query: query
    }))

      .then((res) => res.json())
      .then((data) => {
        setList(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [query]);

  return (
    <div className="App">
        <h1>SnapShot</h1>
        <hr />
          <SearchBar handleSearch={setSearchTerms}/>
          <PhotoBoard list={list}/>
          <SavedSearches savedSearchesList={savedSearches} handleClick={setQueryFromSavedSearch}/>
    </div>
  );
}

export default App;
