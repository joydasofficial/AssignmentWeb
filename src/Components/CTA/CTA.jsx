import React from 'react';
import './CTA.css';
import Info from '../Info/Info'
import Media from '../Media/Media';

const CTA = () => {
    return (
        <div className='cta-container'>
            <Media id={5} />
            <Info id={5} />
        </div>
    )
}

export default CTA
