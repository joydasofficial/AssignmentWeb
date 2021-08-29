import React from 'react'
import './Grid.css'
import Data from '../../Data/Data'


const Grid = () => {
    return (
        <div class="grid-container">

            {Data.filter(Id => Id.id === 6).map((val, index) => {
                return (
                    <>
                        <div class="item1" style={{ backgroundImage: `url('${val.imgsrc1}')` }}></div>
                        <div class="item2" style={{ backgroundImage: `url('${val.imgsrc2}')` }}></div>
                        <div class="item3" style={{ backgroundImage: `url('${val.imgsrc3}')` }}></div>
                    </>)
            })}

        </div>
    )
}

export default Grid
