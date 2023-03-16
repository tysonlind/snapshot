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

  const setQueryFromSavedSearch = (e) => {
    e.preventDefault();
    searchBar.value = e.target.value;
    setQuery(e.target.value);
  }

  const createSavedSearch = () => {
    const warningMsg = document.querySelector("#warning-msg");
    if (savedSearches.length >= 5) {
      // short 3-second message that saved searches limit has been reached
      warningMsg.textContent = "Limit of saved searches reached!";
      warningMsg.classList.remove("hidden");
      setTimeout(() => {
        warningMsg.classList.add("hidden");
      }, 3000)
    } else if (savedSearches.findIndex((searchTerm) => searchTerm.toLowerCase() === searchBar.value.toLowerCase()) !== -1) {
      warningMsg.textContent = "Search already saved!";
      warningMsg.classList.remove("hidden");
      setTimeout(() => {
        warningMsg.classList.add("hidden");
      }, 3000)
    }
    else {
      setSavedSearches([...savedSearches, searchBar.value]);
    }
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
          <SavedSearches savedSearchesList={savedSearches} handleSavedSearch={setQueryFromSavedSearch} handleNewSave={createSavedSearch} />
          <PhotoBoard list={list}/>
    </div>
  );
}

export default App;
