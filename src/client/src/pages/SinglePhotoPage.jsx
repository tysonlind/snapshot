import { useState, useEffect } from "react";

const SinglePhotoPage = () => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [photo, setPhoto] = useState(null);
  
    //const controller = new AbortController();

    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/${id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);
  
    if (isLoaded) {
      return (
        <div>{data}</div>
      );
    } else {
      return <p>Loading</p>;
    }
  };

export default SinglePhotoPage;