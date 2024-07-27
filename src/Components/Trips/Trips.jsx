import React from 'react'
import './Trips.css'
export default function Trips({ card }) {
    return (
        <>
            <div className="Trips">
                <div className="heading">
                    <h1>Recent Trips</h1>
                    <p>You can discover unique destination using Google Maps.</p>
                </div>
                <div className="cardsContainer">
                    {card.map((element, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="image">
                                    <img src={element.img} alt="" />
                                </div>
                                <h3>{element.title}</h3>
                                <p>{element.para}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
