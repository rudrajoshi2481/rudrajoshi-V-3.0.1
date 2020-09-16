import React from 'react'
import './Showoff.css'
function Showoff() {

    const frontEnd = [
        {badgeLink:'',badgeName:''},
        {badgeLink:'',badgeName:''},
        {badgeLink:'',badgeName:''}
    ]

    const backEnd = [
        {badgeLink:'',badgeName:''},
        {badgeLink:'',badgeName:''},
        {badgeLink:'',badgeName:''}
    ]

    const stillLearning = [
        {badgeLink:'',badgeName:''},
        {badgeLink:'',badgeName:''},
        {badgeLink:'',badgeName:''}
    ]

    // Project and Skills
    const project = [
        {badgeLink:'',badgeName:''},
        {badgeLink:'',badgeName:''},
        {badgeLink:'',badgeName:''}
    ]

    return (
        <div className="showoff-container">
            <section>
                <h3>Front End</h3>
                <hr/>
                <div>
                    {
                        frontEnd.map(e => {
                            return <span key={e.badgeName}><a href={e.badgeLink}>{e.badgeName}</a></span>
                        })
                    }
                </div>
            </section>
            <section>
                <h3>Backend End</h3>
                <hr/>
                <div>
                    {
                        backEnd.map(e => {
                            return <span key={e.badgeName}><a href={e.badgeLink}>{e.badgeName}</a></span>
                        })
                    }
                </div>
            </section>
            <section>
                <h3>Learning</h3>
                <hr/>
                <div>
                    {
                        stillLearning.map(e => {
                            return <span key={e.badgeName}><a href={e.badgeLink}>{e.badgeName}</a></span>
                        })
                    }
                </div>
            </section>
            <section>
                <h3>Project & Skills</h3>
                <hr/>
                <div>
                    {
                        project.map(e => {
                            return <span key={e.badgeName}><a href={e.badgeLink}>{e.badgeName}</a></span>
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Showoff
