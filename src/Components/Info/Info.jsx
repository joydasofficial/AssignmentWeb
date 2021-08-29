import React from 'react'
import Data from '../../Data/Data'
import Button from '../Button/Button'
import Desc from '../Desc/Desc'
import Title from '../Title/Title'
import Subtitle from '../Subtitle/Subtitle'
import './Info.css'

const Info = (props) => {
    return (
        <div className='info_container'>

            {Data.filter(Id => Id.id === props.id).map((val, index) => {
                return (
                    <div className={val.classname}>
                        <Subtitle subTitle={val.subTitle} />
                        <Title title={val.title} />
                        <Desc desc={val.desc} />
                        <Button btntext={val.btntext} />
                    </div>)
            })}

        </div>
    )
}

export default Info
