import Btn from "./Btn";

function SavedSearches({ savedSearchesList, handleSavedSearch }) {
  
    return (
      <>
      <p id="warning-msg" className="hidden"></p>
      <ul id="saved-searches-area">
          {savedSearchesList.map((item, idx) => {
          return <li key={item + idx}><Btn type="savedSearch" value={item} handleSavedSearch={handleSavedSearch}/></li>
          })}
      </ul>
      </>
    );
  }
  
  export default SavedSearches;