import React, { Component } from 'react'
//import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Link } from 'react-router-dom'

import beerlogo from '../Favorites/beer.png'

import AuthLogin from '../container/AuthLogin'

class Header extends Component {

    render(){
        return (
            <div id="header">
                <div id="logo-container">
                    <div><img src={beerlogo} alt="beer logo" /></div>
                    <div id="logo-box">
                    <h2 id="logo">BeerMe Social</h2>
                    </div>
                    <div><img src={beerlogo} alt="beer logo" /></div>
                </div>

                <div id="main-nav">
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
                                <Link to="/profile"> Profile </Link>
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
