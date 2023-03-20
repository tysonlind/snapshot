import { useNavigate } from "react-router-dom";

const Btn = ({ type, info, handleNewSave, value, handleSavedSearch }) => {
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
            <button className="btn savedSearchBtn" onClick={handleSavedSearch} value={value}>{value}</button>
        )
    }
}

export default Btn;