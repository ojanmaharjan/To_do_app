import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Login from '../Login/Login'
import "./Layout.css "

const Layout = () => {
  return (
  <>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <li> <Link to ="/Login">Login</Link></li>
               
                <Link>pas</Link>
            </li>
        </ul>
    </nav>
  </>
  )
}

export default Layout
