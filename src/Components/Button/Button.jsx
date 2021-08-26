import React from 'react'
import './Button.css'

const Button = (props) => {

    // const btnStyle = {
    //     color: props.btnColor,
    //     background: props.bgColor,
    // }
    // console.log(btnStyle.btnColor);

    return (
        <button className='button'>{props.btntext}</button>
    )
}

export default Button
