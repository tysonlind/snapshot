import { useState, useEffect } from "react";
import Photo from "./Photo";
import SearchBar from "./SearchBar";

function PhotoBoard() {
  
  function fetchData () {
    useEffect(() => {
      fetch("http://localhost:5000")
        .then((res) => res.json())
        .then((data) => {
          setList(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);
  }
  let [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
    <SearchBar handleSubmit={fetchData}/>
    <ul id="photo-board">
        {list.map((item) => {
        return <li key={item.id}><Photo src={item.urls.full} alt={item.alt_description} /></li>
        })}
    </ul>
    </>
  );
}

export default PhotoBoard;