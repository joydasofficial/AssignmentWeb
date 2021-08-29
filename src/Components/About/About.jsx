import React from 'react'
import Info from '../Info/Info';
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <Info id={2} />
            <div className='additional-info'>
                <h3>What we're known for</h3>
                <h4>custom web design</h4>
                <h4>brand identity design</h4>
                <h4>search engine optimization</h4>
                <h4>strategy and consultant</h4>
            </div>
        </div>
    )
}

export default About
