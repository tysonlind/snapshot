function Photo({ src, alt }) {
    return (
        <>
        <img className="photo-square" src={src} alt={alt} />
        </>
    )
}

export default Photo;