import React from 'react'
import './Header.css'

function Header() {
    return (
        <nav className="header-nav">
            <ul className="header-nav-ul">
                <li className="brandName-header"><h1 style={{margin: 0, padding:0}}>Rudra Joshi</h1> <br /><span>Software developer & pharmacy Student</span></li>
                <li className="contact-email"><h5>Email : rudrajoshi2481@gmail.com</h5></li>
            </ul>
        </nav>
    )
}

export default Header
