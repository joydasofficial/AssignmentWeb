import React from 'react';
import Info from '../Info/Info';
import Media from '../Media/Media';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            <Info heading='Helping Creative Entreprenuers Launch Websites They Love'
                  subHeading='it&apos;s time to step into the spotlight'
                  desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel viverra quam, nec gravida mauris. In feugiat luctus felis, lobortis hendrerit sapien placerat nec. Nunc a finibus turpis, nec ultrices nisl. Integer congue posuere convallis.'
                  btntext='Get A Custom Quote' 
                  classN = 'hero-info'
                  />
            <Media imgsrc='https://source.unsplash.com/900x1200/?website' />
        </div>
    )
}

export default Hero
