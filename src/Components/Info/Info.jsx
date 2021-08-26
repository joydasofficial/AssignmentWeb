import React from 'react'
import Button from '../Button/Button'
import Desc from '../Desc/Desc'
import Heading from '../Heading/Heading'
import Subheading from '../Subheading/Subheading'
import './Info.css'

const Info = (props) => {
    return (
        <div className='info_container'>
            <div className={props.classN}>
                <Subheading subHeading={props.subHeading} />
                <Heading heading={props.heading} />
                <Desc desc={props.desc} />
                <Button btntext={props.btntext} />
            </div>
        </div>
    )
}

export default Info
