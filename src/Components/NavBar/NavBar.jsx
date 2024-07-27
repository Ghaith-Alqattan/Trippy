import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
export default function NavBar({ logo, navItems, btn }) {
    function showMenu() {
        const burger = document.querySelector('.burger>svg')
        const navMenu = document.querySelector('.nav-menu')
        const nav = document.querySelector('nav')
        navMenu.classList.toggle('active')
        if (burger.classList.contains('fa-bars')) {
            nav.style.boxShadow = 'none'
            burger.classList.remove('fa-bars')
            burger.classList.add('fa-xmark')
        } else {
            nav.style.boxShadow = '0 15px 5px 0 rgba(0, 0, 0, 0.25)'
            burger.classList.add('fa-bars')
            burger.classList.remove('fa-xmark')
        }
    }
    return (
        <>
            <nav>
                <h1 className="logo">{logo}</h1>
                <div className="items">
                    <ul>
                        {navItems.map((element, index) => {
                            return (
                                <li key={index}>
                                    <NavLink
                                        to={'/' + element.Link}
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        <i className={element.icon}></i>
                                        {element.text}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <Link to="/Signup">
                        <button>{btn}</button>
                    </Link>
                </div>
                <button className="burger" onClick={showMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </nav>
            <div className="nav-menu">
                <ul>
                    {navItems.map((element, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={element.Link}
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                    <i className={element.icon}></i>
                                    {element.text}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <Link to="/Signup">
                    <button>{btn}</button>
                </Link>
            </div>
        </>
    )
}
