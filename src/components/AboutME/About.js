import React from 'react'
import './About-me.css'

function About() {
    return (
        <div className="about-me-container">
            <h1 className="about-me-container-site" style={{fontWeight:'500'}}>About Me </h1>
            <div className="about-me-hero">
                <strong>Email : rudrajoshi2481@gmail.com</strong><br />
                <strong>Phone No : +91 6355553541</strong><br />
                <strong>Age : 19</strong>
                <br />
                <br />
                <p>I am a <strong className="highlight-about-me-hero">Pharmacy</strong> student in ITM University Vaodara in FY & and i'm really passionate about Programming  and building webapps</p>

                <p>I started learning basic programming like <strong style={{color:'tomato'}}>c++</strong>, <strong style={{color:'tomato'}}>c</strong> ,<strong style={{color:'tomato'}}>redhat</strong> from <strong style={{color:'teal'}}>IANT Institute</strong> in Subhanpura & After that i started Learning from education platform like udemy ,skillshare <strong style={{color:'teal'}}>(stack like AWS,React,Node.js,Mongodb )</strong>,& <br />After completing my 12th i started building personal Projects <a href="http://storybook.rudrajoshi.me">storybook.rudrajoshi.me</a><br /><a href="https://apprentice.rudrajoshi.me">apprentice.rudrajoshi.me</a><br /><a href="https://converter.rudrajoshi.me">Converter for B.pharm</a><br /><a href="https://rudrajoshi.me">rudrajoshi.me</a><br /><a href="https://github.com/rudrajoshi2481">My Github Profile</a> & several Backend servers on Node.js Hosted On AWS ec2 Linux Ubunut</p>
            </div>
            {/* <p style={{fontWeight:'500'}}>I am a pharmacy student from ITM university Vadodara , i have studied <strong>c++</strong>, <strong>c</strong>, <strong>Redhat</strong> in Iant Institute Subhanpura</p> */}
        </div>
    )
}

export default About
