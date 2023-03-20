//form containing a search bar and a submit button
//when the input is submitted by the search (submit) button, the fetch request needs to occur again with the given input, and the photo board needs to re-render

function SearchBar({ handleSearch }) {

    return (
        <>
        <form onSubmit={handleSearch}>
            <input id="searchBar" type="search" name="query" placeholder="Search for photos..."></input>
            <button className="btn" type="submit">Search</button>
        </form>
        </>
    )
}

export default SearchBar;