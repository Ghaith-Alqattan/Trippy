import React from 'react'
import './BottomFooter.css'
export default function BottomFooter({ links1, links2, links3, links4 }) {
    return (
        <>
            <div className="bottomFooter">
                <div className="container">
                    <div className="section">
                        <h4>Project</h4>
                        <ul className="links">
                            {links1.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#">{element.link}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="section">
                        <h4>Community</h4>
                        <ul className="links">
                            {links2.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#">{element.link}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="section">
                        <h4>Help</h4>
                        <ul className="links">
                            {links3.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#">{element.link}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="section">
                        <h4>Others</h4>
                        <ul className="links">
                            {links4.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#">{element.link}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
