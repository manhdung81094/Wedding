import React from 'react'

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id='navbar-menu-item'>
            <div className="container">
                <div className="collapse navbar-collapse fixed-top justify-content-center py-3 bg-light" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#story">Love Story</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#date">Date Event</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#events">Wedding Event</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Navigation;