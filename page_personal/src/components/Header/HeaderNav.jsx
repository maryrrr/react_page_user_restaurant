import React from 'react'
import './headerNav.styles.scss'
import { Link } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <nav className="menu-nav">
        <ul className='menu-nav__list'>
            <li className='nam-menu__list-item'><Link to='/' className='manu-nav__link'>Home</Link></li>
            <li className='nam-menu__list-item'><Link to='/' className='manu-nav__link'>Contact</Link></li>
            <li className='nam-menu__list-item'><Link to='/' className='manu-nav__link'>Profile</Link></li>
            <li className='nam-menu__list-item'><Link to ='/User' className='manu-nav__link'>Sign Up</Link></li>
        </ul>


</nav>
  )
}
