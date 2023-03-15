import SavedSearchBtn from "./SavedSearchBtn";

function SavedSearches({ savedSearchesList, handleClick }) {
  
    return (
      <>
      {/* this needs to capture the current value in the search bar and save it as a saved search */}
      <button></button>
      <ul id="saved-searches">
          {savedSearchesList.map((item, idx) => {
          return <li key={item + idx}><SavedSearchBtn value={item} onClick={handleClick}/></li>
          })}
      </ul>
      </>
    );
  }
  
  export default SavedSearches;