import Photo from "./Photo";
import { Link } from "react-router-dom";

function PhotoBoard({ list }) {
  
  return (
    <>
    <ul id="photo-board">
        {list.map((item) => {
        return <li key={item.id}><Link to={`/${item.id}`}><Photo src={item.urls.small} alt={item.alt_description} /></Link></li>
        })}
    </ul>
    </>
  );
}

export default PhotoBoard;