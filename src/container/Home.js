import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <div id="home-contaier">
                <div>
                <section id="top-home-section">
                    <div id="top-home-content">
                        <div className="welcome-box">
                            <div><h1>Cheers</h1></div>
                        </div>
                        <div id="intro-container">
                            <div className="home-intro">
                                <p>At BeerMe Social you can track
                                your alcoholic drinks. Find your friends and track their progress.
                                As well as follow the global ranking board. Use the guest login and test out the app.
                                </p>
                            </div>
                            <div><Link to="/profile"><button className="guest-button" type="button">Guest Login</button></Link></div>
                        </div>
                    </div>
                </section>
                </div>
                <div>
                <section id="middle-home-section">
                    <div id="middle-home-content">
                        <div className="middle-title">
                            <div><h1>Track progress</h1></div>
                        </div>
                        <div className="middle-grid-content">
                            <div className="middle-content-boxa"></div>                            
                        </div>
                    </div>
                </section>
                </div>
                <div>
                <section id="bottom-home-section">
                <div id="bottom-home-content">
                        <div id="a" className="bottom-grid-content">
                            <div className="bottom-content-boxb"></div>                            
                        </div>
                        <div id="b" className="bottom-title">
                            <div><h1>Follow Friends</h1></div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        )
    }
}

export default Home
