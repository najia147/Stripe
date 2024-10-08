import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();
  const displaySubmenu = (e) => {
    console.log('hello world');
    openSubmenu()
  }
  return <nav>
    <div className='nav-center'>
      <div className='nav-header'>
       <img src={logo} className='nav-logo' alt='stripe'/>
       <button className='btn toggle-btn' onClick={openSidebar}>
        <FaBars />
       </button>
      </div>
      <ul className='nav-links'>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            products
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            developers
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            company
          </button>
        </li>
      </ul>
      <button className='btn signin-btn'>Sign in</button>
    </div>
    </nav>
}

export default Navbar
