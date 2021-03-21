import React from 'react'
import Header from '../../UI/Header'
import '../../styles/MasterPiece.css'

import img01 from './img01.jpg'
import img02 from './img02.jpg'
import img03 from './img03.jpg'
import img04 from './img04.jpg'
import img05 from './img05.jpg'
import img06 from './img06.jpg'
import img07 from './img07.jpg'
import img08 from './img08.jpg'
import img09 from './img09.jpg'

function Masterpiece() {
    return (
        <>
            <Header />
            <MasterPiece />
        </>
    )
}

const MasterPiece = () => {
    return(
        <div className="MasterPiece-container">
            <div className="MasterPiece-container-01">
                <h1>Blender &amp; Design Skills</h1>
                <hr />
                <div>
                    <img className="Masterpiece-container-01-blender-span" src={img01} width={'350'}/>
                    <img className="Masterpiece-container-01-blender-span" src={img02} width={'350'}/>
                    <img className="Masterpiece-container-01-blender-span" src={img03} width={'350'}/>
                    <img className="Masterpiece-container-01-blender-span" src={img04} width={'350'}/>
                    <img className="Masterpiece-container-01-blender-span" src={img05} width={'350'}/>
                    <img className="Masterpiece-container-01-blender-span" src={img06} width={'350'}/>
                    <img className="Masterpiece-container-01-blender-span" src={img07} width={'350'}/>
                    <img className="Masterpiece-container-01-blender-span" src={img08} width={'350'}/>
                    <img className="Masterpiece-container-01-blender-span" src={img09} width={'350'}/>
                </div>
            </div>
            <div className="MasterPiece-container-01">
                <h1>Website Design</h1>
                <h1><li><a href="http://apprentice.rudrajoshi.me/">Apprintice.com</a></li></h1>
                {/* <div style={{display:'flex' ,flexWrap:'wrap',alignItems:'center'}}>
                <iframe style={{width:'50vw',height:'70vh',border:'none'}}  src="http://apprentice.rudrajoshi.me/"></iframe>
                <div>A sample project for simple website's</div>
                </div> */}
            </div>
            <div className="MasterPiece-container-01">
                <h1>Dev-ops Blogs</h1>
            </div>
        </div>
    )
}

export default Masterpiece
