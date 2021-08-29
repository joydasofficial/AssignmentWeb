import React from 'react';
import Info from '../Info/Info';
import Media from '../Media/Media';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            <Info id={1} />
            <Media id={1} />
        </div>
    )
}

export default Hero
