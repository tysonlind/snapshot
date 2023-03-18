import { useNavigate } from "react-router-dom"

const Btn = ({ type, info }) => {
    const navigate = useNavigate();
    
    if (type == "back") {
        const goBack = () => {
        navigate(-1);
    }
        return (
            <button onClick={goBack}>Back</button>
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
            <button onClick={() => downloadImage(info.src)}>Download Image</button>
        )
    }
}

export default Btn;