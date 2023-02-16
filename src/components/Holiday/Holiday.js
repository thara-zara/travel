import React from 'react'
import "./Holiday.css"
import mask2 from "../../assets/Mask2.png"
import mask from "../../assets/Mask.jpg"
import brazil from "../../assets/brazil.jpg"

const Holiday = () => {
  return (
    <div className='Holiday'>
        <div className='holiday-bdy'>
            <div className='holiday-card'>
                <img src={mask2} alt="img"/>
            </div>
            <div className='holi-txt'>
                next holiday
            </div>
            <div className='back-img'>
                <img src={mask} alt="img"/>
            </div>
        </div>
       
    </div>
  )
}

export default Holiday