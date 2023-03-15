import { useState, useEffect } from "react";
import PhotoBoard from "./components/PhotoBoard";

function App() {

  return (
    <div className="App">
        <h1>SnapShot</h1>
        <hr />
          <PhotoBoard />
    </div>
  );
}

export default App;
