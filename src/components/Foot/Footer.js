import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-bdy'>
            <div className='foot-top'>
                <h1>keep in touch</h1>
                <div className='search'>
                    <input type="text" placeholder="type your email"/> <button>send</button>
                </div>
            </div>
            <div className='foot-btm'>
                <img src={logo} alt="img"/>
                <div className='agency'>
                    <h2>our agency</h2>
                    <p>Insuarance</p>
                    <p>payment</p>
                    <p>tourism</p>
                    <p>services</p>
                </div>
                <div className='partner'>
                    <h2>partners</h2>
                    <p>booking.com</p>
                    <p>stobooking</p>
                    <p>momando</p>
                    <p>mybook</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer