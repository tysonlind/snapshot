import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Btn = ({ type, info, handleNewSave, value, handleSavedSearch, removeSavedSearch }) => {

    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    
    if (type == "back") {
        const goBack = () => {
        navigate(-1);
    }
        return (
            <button className="btn" onClick={goBack}>Back</button>
            )

    } else if (type == "download") {
        async function downloadImage (src) {
            const image = await fetch(src)
            const imageBlog = await image.blob()
            const imageURL = URL.createObjectURL(imageBlog)
          
            const link = document.createElement('a')
            link.href = imageURL
            link.download = info.alt;
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }
        return (
            <button className="btn" onClick={() => downloadImage(info.src)}>Download Image</button>
        )
    } else if (type == "saveSearch") {
        return (
            <>
            <button className="btn saveSearchBtn" onClick={handleNewSave}><i className="fa-regular fa-bookmark"></i></button>
            </>
        )
    } else if (type == "savedSearch") {
        return (
            <div className="savedSearchBtn-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <i className={`fa-regular fa-circle-xmark fa-2xs remove-btn ${isHovered ? "" : "hidden"}`} onClick={removeSavedSearch} data-value={value}></i>
                <button className="btn savedSearchBtn" onClick={handleSavedSearch} value={value}>{value}</button>
            </div>
        )
    }
}

export default Btn;