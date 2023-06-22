import { useState } from "react";

function Photo({ src, alt }) {
    return (
        <>
        <img loading="lazy" className="photo-square" src={src} alt={alt} />
        </>
    )
}

export default Photo;