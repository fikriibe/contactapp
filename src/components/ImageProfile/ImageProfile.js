import React from 'react'
import { getInitialName } from '../../configs/utils/logicHelper'
import * as styles from "./ImageProfile.css"


const ImageProfile = ({ src, alt, className, ...props }) => {
    if (!src.includes("http")) {
        return <div className={`content-img content-center ${className}`} {...props}>
            <p>
                {getInitialName(alt)}
            </p>

        </div>
    }
    return (
        <img {...props} src={src} alt={alt} className={`content-img ${className}`} />
    )
}

ImageProfile.defaultProps = {
    alt: "",
    src: ""
}

export default ImageProfile
