import React from 'react'
import './TopFooter.css'
import { Link } from 'react-router-dom'
export default function TopFooter({ logo, para, socialIcons }) {
    return (
        <>
            <div className="topFooter">
                <div className="container">
                    <div className="text">
                        <h1>{logo}</h1>
                        <p>{para}</p>
                    </div>
                    <ul className="social">
                        {socialIcons.map((element, index) => {
                            return (
                                <li key={index}>
                                    <Link to={element.link} target="_blank">
                                        <i className={element.icon}></i>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
