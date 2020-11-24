import React from 'react'
import Header from '../../UI/Header'
import '../../styles/MasterPiece.css'

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
            </div>
            <div className="MasterPiece-container-01">
                <h1>Website Design</h1>
            </div>
            <div className="MasterPiece-container-01">
                <h1>Dev-ops Blogs</h1>
            </div>
        </div>
    )
}

export default Masterpiece
