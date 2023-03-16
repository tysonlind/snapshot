import SavedSearchBtn from "./SavedSearchBtn";

function SavedSearches({ savedSearchesList, handleNewSave, handleSavedSearch }) {
  
    return (
      <>
      <button id="newSavedSearchBtn" onClick={handleNewSave}>Save this Search</button>
      <p id="warning-msg" className="hidden"></p>
      <ul id="saved-searches">
          {savedSearchesList.map((item, idx) => {
          return <li key={item + idx}><SavedSearchBtn value={item} handleClick={handleSavedSearch}/></li>
          })}
      </ul>
      </>
    );
  }
  
  export default SavedSearches;