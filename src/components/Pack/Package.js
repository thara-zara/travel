import React from 'react'
import "./Package.css"
import Pack from "./Data"

const Package = () => {
  return (
    
    <div className='pckg'>
         <div className='pckg-head'>
                <p>OUR PROPOSALS</p>
                <h1>our Packages</h1>
            </div>
        <div className='pckg-bdy'>
        {Pack.map((pack,index)=>{
        return(
            <div className='pckg-card' key={index}>
                <img src={pack.img} alt="img"/>
                <div className='content'>
                    <div className='cntry'>
                        {pack.name}
                    </div>
                    <h2>{pack.country}</h2>
                    <p>{pack.description}</p>
                    <button>details</button>
                </div>
            </div>    
             )
            })}
        </div>
    </div>
   
  )
}

export default Package