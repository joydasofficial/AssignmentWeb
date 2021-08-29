import React from 'react'
import './Media.css'
import Data from '../../Data/Data'


const Media = (props) => {
    return (
        <>
            {Data.filter(Id => Id.id === props.id).map((val, index) => {
                return (
                    <div className='media' style={{ backgroundImage: `url('${val.imgsrc}')` }}></div>
                )
            })}
        </>
    )
}

export default Media
