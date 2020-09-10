import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Link } from 'react-router-dom'

import ham from '../Favorites/ham.png'
import beerlogo from '../Favorites/beer.png'

import AuthLogin from '../container/AuthLogin'

class Header extends Component {

// navBar = () => {
//     let div = document.getElementById('nav-links')
//     if(div.style.display === "none"){
//         div.style.display = 'block'
//     } else {
//         div.style.display = 'none'
//     }
// }


    render(){
        return (
            <div id="header">
                <TransitionGroup>
                <div id="logo-container">
                    <div><img src={beerlogo} /></div>
                    <div id="logo-box">
                    <h2 id="logo">BeerMe Social</h2>
                    </div>
                    <div><img src={beerlogo} /></div>
                </div>

                <div id="main-nav">
                    {/* <div id="menu-container">
                        <li id="menu-bar" onClick={this.navBar}>
                            <img id="ham-menu" src={ham} />
                        </li>
                    </div> */}
                    <div id="nav-links" className="nav-links-show">
                        <div id="link-container">
                            <div className="link-box">
                                <Link to="/">Home</Link>
                            </div>
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
                </TransitionGroup>
            </div>
        )
        }
}

export default Header
