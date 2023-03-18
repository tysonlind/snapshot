import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Btn from "../components/Btn";

const SinglePhotoPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [photo, setPhoto] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setPhoto(data);
            setIsLoaded(true);
          })
          .catch((err) => {
            console.error(err);
          });

      }, [id]);
  
    if (isLoaded) {
      return (
        <>
        <img src={photo.urls.full} alt={photo.alt_description} className="full-photo" />
        <Btn type="back" />
        <Btn type="download" info={{src: photo.urls.full, alt: photo.alt_description}} />
        </>
      );
    } else {
      return <p>Loading</p>;
    }
  };

export default SinglePhotoPage;