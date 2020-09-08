import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import ham from '../Favorites/ham.png'
import beerlogo from '../Favorites/beer.png'

import AuthLogin from '../container/AuthLogin'

class Header extends Component {

navBar = () => {
    console.log('menu clicked')
    let div = document.getElementById('nav-links')
    if(div.style.display === "none"){
        div.style.display = 'block'
    } else {
        div.style.display = 'none'
    }
}


    render(){
        return (
            <div id="header">
                <div id="logo-container">
                    <div><img src={beerlogo} /></div>
                    <div id="logo-box">
                    <h2 id="logo">BeerMe</h2>
                    </div>
                    <div><img src={beerlogo} /></div>
                </div>
                <div id="main-nav">
                    <div id="menu-container">
                        <li id="menu-bar" onClick={this.navBar}>
                            <img id="ham-menu" src={ham} />
                        </li>
                    </div>
                    <div id="nav-links">
                        <div className="link-container">
                            
                                <Link to="/">
                                    <div className="link-box">
                                     Home
                                    </div>
                                </Link>
                            
                            <div className="link-box">
                                <Link to="/public"> Graph </Link>
                            </div>
                            <div className="link-box">
                                <Link to="/ranking" > Ranking </Link>
                            </div>
                            <div className="link-box">
                                <Link to="/privateroute"> Profile </Link>
                            </div>
                        </div>
                    </div>
                    <div id="auth-box">
                        <AuthLogin />
                    </div>
                </div>
            </div>
        )
        }
}

export default Header
