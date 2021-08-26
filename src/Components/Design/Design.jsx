import React from 'react'
import Info from '../Info/Info';
import Media from '../Media/Media';
import './Design.css'

const Design = () => {
    return (
        <div className='design-container'>
            <Info heading='Design'
                subHeading='sub heading'
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel viverra quam, nec gravida mauris. In feugiat luctus felis, lobortis hendrerit sapien placerat nec. Nunc a finibus turpis, nec ultrices nisl. Integer congue posuere convallis.'
                btntext='View Web Design Packages' 
                classN='design-info' />
            <Media  imgsrc='https://source.unsplash.com/900x1200/?design' />
        </div>
    )
}

export default Design
