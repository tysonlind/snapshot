import { useState, useEffect } from "react";
import PhotoBoard from "../components/PhotoBoard";
import SearchBar from "../components/SearchBar";
import SavedSearches from "../components/SavedSearches";
import Btn from "../components/Btn";

//add functionality for invalid or blank searches
//clean up code

function Homepage() {
  let [isLoaded, setIsLoaded] = useState(false);
  let [list, setList] = useState([]);
  let [query, setQuery] = useState(JSON.parse(localStorage.getItem("query")));
  let [savedSearches, setSavedSearches] = useState(JSON.parse([localStorage.getItem("savedSearches")]));

  
   useEffect(() => {
    localStorage.setItem('query', JSON.stringify(query));
    localStorage.setItem('savedSearches', JSON.stringify(savedSearches));
  }, [query, savedSearches]);
  
  useEffect(() => {
    const currentQuery = JSON.parse(localStorage.getItem('query'));
    if (currentQuery) {
        setQuery(currentQuery);
    }
    const currentSavedSearches = JSON.parse(localStorage.getItem('savedSearches'));
        setSavedSearches(currentSavedSearches);
  }, []);
  
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

    if (searchBar.value) {
        if (savedSearches.length >= 5) {
        // show 3-second message that saved searches limit has been reached
        warningMsg.textContent = "Limit of saved searches reached!";
        warningMsg.classList.remove("hidden");
        setTimeout(() => {
            warningMsg.classList.add("hidden");
        }, 3000)
        // another warning message if saved search already exists
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
  }

    const removeSavedSearch = (e) => {

        let updatedSavedSearches = [];
        for (let search of savedSearches) {
            if (search !== e.target.getAttribute("data-value")) {
                updatedSavedSearches.push(search);
            }
        }
        setSavedSearches([...updatedSavedSearches]);
    }
  useEffect(() => {
    fetch("http://localhost:5000" + "?" + new URLSearchParams({
      query: query
    }))

      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [query]);

  if (isLoaded) {
   return (
    <div className="App">
        <div id="homepage">
            <div id="forkme">
                <a href="https://github.com/mbasagoitia/snapshot"><img decoding="async" loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_white_ffffff.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" /></a>
            </div>
            <h1 id="title">SnapShot</h1>
            <div className="searchbar-wrapper">
            <SearchBar handleSearch={setSearchTerms}/>
            <Btn type="saveSearch" handleNewSave={createSavedSearch} />
            </div>
            <SavedSearches savedSearchesList={savedSearches} handleSavedSearch={setQueryFromSavedSearch} removeSavedSearch={removeSavedSearch}/>
            <PhotoBoard list={list}/>
        </div>
    </div>
  );   
  } else {
    return <p>Loading...</p>;
  }

}

export default Homepage;