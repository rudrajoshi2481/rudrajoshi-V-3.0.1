import '../styles/Header.css'
import React from 'react'
import { NavLink } from "react-bootstrap";
import {Link } from 'react-router-dom'

const Header = () => {
    return (
      <nav className="header-nav nav">
        <div>
          <NavLink>
            <Link to="/"><h1 className="header-brand-name">RJ</h1></Link>
          </NavLink>
        </div>
        <span className="header-bars">
          <i className="fas fa-bars "></i>
        </span>
        <div className="header-links">
          <ul className="header-links-ul">
            <li>
            <a target="_blank" href="https://github.com/rudrajoshi2481" style={{paddingRight:'1vw',fontSize:'22px'}}>github <i class="fab fa-github"></i></a>
            </li>
            <li>
              <Link  style={{ color: "black" ,fontSize:'22px',paddingLeft:'1vw'}} to="/about">About ME</Link>
            </li>
            <li>
              {/* <NavLink style={{ color: "black" }}>Blogs</NavLink> */}
            </li>
            <li>
              {/* <NavLink style={{ color: "black" }}>Personal</NavLink> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Header