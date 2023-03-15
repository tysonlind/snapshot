import Photo from "./Photo";

function PhotoBoard({ list }) {
  
  return (
    <>
    <ul id="photo-board">
        {list.map((item) => {
        return <li key={item.id}><Photo src={item.urls.full} alt={item.alt_description} /></li>
        })}
    </ul>
    </>
  );
}

export default PhotoBoard;