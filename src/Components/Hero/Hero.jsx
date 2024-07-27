import React from 'react'
import './Hero.css'
export default function Hero({ height, img, title, desc, btn }) {
    return (
        <>
            <div className="hero" style={{ height: height }}>
                <img src={img} alt="" style={{ height: height }} />
                <h1>{title}</h1>
                <p>{desc}</p>
                <button style={{ display: btn?.show ? 'block' : 'none' }}>
                    {btn.content}
                </button>
            </div>
        </>
    )
}
