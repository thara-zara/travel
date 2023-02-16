import React from 'react'
import "./Home.css"
import back from "../../assets/back.jpg"

import Nav from '../Nav/Nav'
import Destination from '../Destination/Destination'
import Holiday from '../Holiday/Holiday'
import Little from '../LittleDes/Little'
import Package from '../Pack/Package'
import Footer from '../Foot/Footer'


const Home = () => {
  return (
    <div className='container'>
        <div className='hero'>
          <div className='navbar'>
          <Nav/>
          </div>
          <div className='hero-img'>
              <img src={back} alt="img"/>
          </div>
          <div className='hero-text'>
            <div className='hero-head'>NEVER STOP EXPLORING</div>
            <p>Check Our Best Promotions</p>
            <button>Start Experience</button>
          </div>
          <div className='social'>
            <div className='social-text'>
              <h3>follow us on social media</h3>
              <p>you can receive the best offers on social media</p>
            </div>
            <div className='icons'>
                <i className='fab fa-facebook'/>
                <i className='fab fa-youtube'/>
                <i className='fab fa-instagram'/>
                <i className='fab fa-twitter'/>
            </div>
          </div>
        </div>

        <Destination/>

        <Holiday/>

        <Little/>

        <Package/>

        <Footer/>
    </div>
  )
}

export default Home