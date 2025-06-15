import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Login from '../Login/Login'

import './Layout.css'

const Layout = () => {
  return (
  <div className='layout'>
    <nav>
        <ul>
            <li>
                <Link to="/" className='home'>Home</Link>
                <li> <Link to ="/Login" className='home'>Login</Link></li>
               
              
            </li>
        </ul>
    </nav>
    <Outlet/>
  </div>
  )
}

export default Layout
