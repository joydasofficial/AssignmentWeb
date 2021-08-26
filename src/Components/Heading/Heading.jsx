import React from 'react'
import './Heading.css'

const Heading = (props) => {
    return (
        <h2 className='title'>{props.heading}</h2>
    )
}

export default Heading
