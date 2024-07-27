import React from 'react'
import './PopularContainer.css'
export default function PopularContainer({
    titleSize,
    paraSize,
    title,
    desc,
    firstImg,
    secImg,
    reverse,
}) {
    return (
        <>
            <div className={`container ${reverse}`}>
                <div className="text">
                    <h2 style={{ fontSize: titleSize }}>{title}</h2>
                    <p style={{ fontSize: paraSize }}>{desc}</p>
                </div>
                <div className="images">
                    <img src={firstImg} alt="" />
                    <img src={secImg} alt="" />
                </div>
            </div>
        </>
    )
}
