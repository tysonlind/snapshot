import Btn from "./Btn";

function SavedSearches({ savedSearchesList, handleSavedSearch, removeSavedSearch }) {
  
    return (
      <>
      <ul id="saved-searches-area">
          {savedSearchesList.map((item, idx) => {
          return <li key={item + idx}><Btn type="savedSearch" value={item} handleSavedSearch={handleSavedSearch} removeSavedSearch={removeSavedSearch}/></li>
          })}
      </ul>
      <p id="warning-msg" className="hidden"></p>
      </>
    );
  }
  
  export default SavedSearches;