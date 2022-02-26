import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavStyle } from '../styles/CardQuestion'

export default class NavBar extends Component {
    render() {
        return (
            <NavStyle  className="navbar bg-dark" style = {{padding:'25px'}}  >
                <Link to="/home" className="nav-link"><img  src="https://i.ibb.co/Kx8WRTg/home.png" alt="" /></Link>
                <Link to="/statitics" className="nav-link"><img  src="https://i.ibb.co/3dxVvBb/home-2.png" alt="" /></Link>
                <Link to="/profile" className="nav-link"><img  src="https://i.ibb.co/WKN0QhX/home-3.png" alt="" /></Link>
            </NavStyle>
        )
    }
}