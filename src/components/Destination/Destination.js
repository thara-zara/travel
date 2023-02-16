import React from 'react'
import "./Destination.css"
import china from "../../assets/china.jpg"
import male from "../../assets/male.jpg"
import rusia from "../../assets/rusia.jpg"
import ptp from "../../assets/ptp.jpg"
import photo from "../../assets/photo.jpeg"



const Destination = () => {
  return (
    <div className='destination'>
        <div className='dest-body'>
            <div className='des-text'>
                <p>OUR PROPOSALS</p>
                <h1>Popular Destinations</h1>
            </div>
            <div className='des-item'>
                <div className='item-top'>
                    <div className='top-card'>
                        <img src={china} alt="img"/>
                        <div className="tp-text">
                            <div className='hd'>china</div>
                            <div className='sb'>8 packages</div>
                        </div>      
                    </div>
                    <div className='top-card'>
                        <img src={male} alt="img"/>
                        <div className="tp-text">
                            <div className='hd'>Maldives</div>
                            <div className='sb'>8 packages</div>
                        </div>      
                    </div>
                </div>
                <div className='item-btm'>
                    <div className='top-card'>
                            <img src={rusia} alt="img"/>
                            <div className="tp-text">
                            <div className='hd'>Russia</div>
                            <div className='sb'>8 packages</div>
                        </div>       
                    </div>
                    <div className='top-card'>
                            <img src={photo} alt="img"/>
                            <div className="tp-text">
                            <div className='hd'>Dubai</div>
                            <div className='sb'>8 packages</div>
                        </div>       
                    </div>
                    <div className='top-card bottom'>
                            <img src={ptp} alt="img"/>
                            <div className="tp-text">
                            <div className='hd'>Italy</div>
                            <div className='sb'>8 packages</div>
                        </div>  
                    </div>
                </div>
            </div>
             <button>
            explore more
        </button>
        </div>
       
    </div>
  )
}

export default Destination