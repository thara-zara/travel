import React from 'react'
import "./Little.css"
import arizona from "../../assets/arizona.jpg"

const Little = () => {
  return (
    <div className='little'>
        <div className='l-des-bdy'>
            <div className='l-des-left'>
                <div className='cntry'>
                South America
                </div>
                <div className='name'>
                Arizona
                </div>
                <p>
                A wonderful serenity has taken possession of my entire soul, 
                like these sweet mornings of spring which I enjoy with my whole heart.
                    When, while the lovely valley teems with vapor around me,
                    and the meridian sun strikes the upper surface 
                    of the impenetrable foliage of my trees
                </p>
                <h2>$600 <span>$800</span></h2>
                <button>order now</button>
            </div>
            <div className='l-des-right'>
                <img src={arizona} alt="img"/>
                <button>amazing experience</button>
            </div>
        </div>
    </div>
  )
}

export default Little