import React ,{useState} from 'react'
import logo from "../../assets/logo.svg"
import "./Nav.css"

const Nav = () => {

    const [showNav,setShowNav]=useState(true);
    const handleClick = () =>{
        setShowNav(!showNav);
    }
  return (
    <div className='nav'>
        <div className='navigation'>
            <div className='logo'>
                <img src={logo} alt="img" />
            </div>
            <div  className={showNav ?'nav-item' : 'nav-item active'} >
                <ul>
                    <li>package</li>
                    <li>destinations</li>
                    <li>contact us</li>
                    <li>about us</li>
                </ul>
                <div className='btn'>
                    <i className='fas fa-times' onClick={handleClick}/>
                </div>
            </div>
            <div className='menu'>
                <i className='fas fa-bars' onClick={handleClick}/> 
            </div>
        </div>
    </div>
  )
}

export default Nav