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
        <div id="single-photo-page">
            <div className="spp-content-wrapper">
            <img src={photo.urls.full} alt={photo.alt_description} className="full-photo" />
                <div className="spp-btn-area">
                <Btn type="back" />
                <Btn type="download" info={{src: photo.urls.full, alt: photo.alt_description}} />
                </div>
            </div>
        </div>
      );
    } else {
      return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
      )
    }
  };

export default SinglePhotoPage;