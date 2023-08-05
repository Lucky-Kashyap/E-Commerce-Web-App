import React from 'react';
import logo from '../assets/img/images.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='e-commerce-logo'/>
        <ul>

            <Link to='/'><li>Home</li></Link>
            <Link to='/category'><li>Category</li></Link>
            <Link to='/services'><li>Services</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar