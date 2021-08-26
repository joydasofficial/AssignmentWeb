import React from 'react'
import './Media.css'

const Media = (props) => {
    return (
        <div className='media' style={{ backgroundImage:`url('${props.imgsrc}')` }}></div>
    )
}

export default Media
