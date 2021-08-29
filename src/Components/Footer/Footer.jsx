import React from 'react'
import './Footer.css'
import { RiFacebookFill, RiInstagramLine, RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-question'>
                <h3>Looking for more information?</h3>
            </div>
            <div className='footer-data'>
                <button><RiFacebookFill size='20px'/></button>
                <button><RiInstagramLine size='20px' /></button>
                <button><RiYoutubeLine size='20px' /></button>
            </div>
        </div>
    )
}

export default Footer
