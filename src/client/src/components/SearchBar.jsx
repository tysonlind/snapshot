//form containing a search bar and a submit button
//when the input is submitted by the search (submit) button, the fetch request needs to occur again with the given input, and the photo board needs to re-render

function SearchBar({ handleSearch }) {

    return (
        <>
        <form onSubmit={handleSearch}>
            <button id="searchBtn" className="btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            <input id="searchBar" type="search" autoComplete="off" name="query" placeholder="Search for photos..."></input>
        </form>
        </>
    )
}

export default SearchBar;