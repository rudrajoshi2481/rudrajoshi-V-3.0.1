import React from 'react';
import './App.css';
import './styles/Header.css'
import './styles/Body.css'
import { NavLink } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
       <Header />
       <Body />
    </div>
  );
}

const Body = () => {
  return(
    <div className="body-container">
        <div style={{display:'flex',flexDirection:'row'}} className="body-info-title">
          <div >
          <svg width="100" height="271" viewBox="0 0 120 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0)" filter="url(#filter0_d)">
<path d="M88.226 237.225C76.4478 237.275 64.8834 234.691 54.8194 229.759C29.0025 217.187 9.82294 187.663 3.50659 150.795C-1.21564 123.234 2.58413 97.2413 12.961 86.1073C14.9857 83.8549 17.5879 81.9799 20.591 80.6095C23.5941 79.2391 26.9278 78.4053 30.3661 78.1647C30.2409 72.092 30.717 66.021 31.7898 60.0093C34.5168 44.4797 40.4822 30.9863 49.5256 19.9088C71.1216 -6.54468 103.415 1.62407 112.479 1.49479V2.56134C103.526 2.69062 71.5928 -5.51855 50.3177 20.6037C41.3946 31.5358 35.4994 44.8433 32.8024 60.1951C31.7485 66.1187 31.2825 72.1006 31.4088 78.0839C36.2527 77.9267 41.0873 78.5417 45.6356 79.8938C63.6823 84.9599 81.0373 99.4471 84.2857 112.213C86.4012 120.519 85.8598 127.363 82.7117 132.001C79.9245 136.097 75.2022 138.368 68.6753 138.756C50.6988 139.83 45.9364 129.642 41.3044 119.8L41.2042 119.582C35.9806 108.489 30.9877 95.3426 30.4263 79.1828C27.1221 79.4225 23.9204 80.232 21.0384 81.5564C18.1565 82.8807 15.6616 84.6891 13.723 86.8587C3.56669 97.7504 -0.122903 123.372 4.53917 150.609C10.8054 187.13 29.7745 216.363 55.2906 228.79C74.4602 238.13 93.8605 236.87 106.774 234.219L106.964 235.262C100.845 236.548 94.5497 237.208 88.226 237.225ZM31.4088 79.1666C31.9702 95.1567 36.903 108.133 42.0764 119.114L42.1767 119.332C46.6683 128.866 51.3404 138.723 68.595 137.705C74.8011 137.334 79.2626 135.209 81.8594 131.379C84.8672 127.016 85.3284 120.487 83.2831 112.496C80.1149 100.077 63.1009 85.9133 45.3549 80.9361C40.8961 79.6122 36.1567 79.0109 31.4088 79.1666Z" fill="black" stroke="black" strokeMiterlimit="10"/>
<path d="M79.9845 212.784C82.2394 216.273 85.0726 219.5 88.4063 222.374C89.9613 223.632 91.6375 224.788 93.4193 225.833C95.012 226.964 96.6859 228.019 98.4323 228.992C100.909 230.236 103.756 231.117 105.992 232.838C106.453 233.193 107.767 233.743 107.997 234.284C108.308 235.092 107.265 236.118 106.824 236.522C105.45 237.791 103.706 238.453 102.363 239.867C101.5 240.78 100.498 241.58 99.7056 242.574C98.4624 243.962 97.0628 245.255 95.5247 246.436C92.4568 249.127 90.0105 252.65 87.0428 255.478C85.579 256.867 84.1052 258.209 82.7617 259.736C82.1802 260.39 81.4283 262.224 80.5159 262.16" stroke="black" strokeWidth="2" strokeMiterlimit="10"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="120" height="271" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="3" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<clipPath id="clip0">
<rect width="112" height="263" fill="white" transform="translate(1)"/>
</clipPath>
</defs>
</svg>

          </div>
          <div className="body-info-main-title">
            <h1 className="body-info-hero-title">Hi, I’m Rudra,<br />
I develop website’s,<br />
Moblie App, Game’s ... </h1>
<button className="body-info-container-btn"><h3> All Master Piece </h3></button>
          </div>

        </div>
       
    </div>
  )
}

const Header = () => {
  return(
    <nav className="header-nav nav">
      <div >
      <NavLink><h1 className="header-brand-name">RJ</h1></NavLink>
      </div>
        <span className="header-bars"><i className="fas fa-bars "></i></span>
      <div className="header-links">
        <ul className="header-links-ul">
          <li ><NavLink style={{color:'black'}}>Linkdin</NavLink></li>
          <li><NavLink style={{color:'black'}}>Works</NavLink></li>
          <li><NavLink style={{color:'black'}}>Blogs</NavLink></li>
          <li><NavLink style={{color:'black'}}>Personal</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default App;
