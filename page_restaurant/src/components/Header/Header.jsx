import React from 'react'
import './Header.styles.scss'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    
    <nav className="menu-nav">
        <ul className='menu-nav__list'>
            <li className='menu-nav__list-item'><Link to='/' className='menu-nav__link'>Home</Link></li>
            <li className='menu-nav__list-item'><Link to='../Menu' className='menu-nav__link'>Menu</Link></li>
            <li className='menu-nav__list-item'><Link to='../User' className='menu-nav__link'>Reserve</Link></li>
            
        </ul>
</nav>
  )
}
