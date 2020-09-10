import React, { Component } from 'react'

export class Home extends Component {


    render() {
        return (
            <div id="home-contaier">
                <div>
                <section id="top-home-section">
                    <div id="top-home-content">
                        <div className="welcom-box">
                            <div><h1>Welcome</h1></div>
                        </div>
                        <div>
                            <div><p>introduction</p></div>
                            <div><button type="button">Guest Login</button></div>
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
                    {/*<div className="middle-grid-content">
                            <div className="middle-content-boxb"></div>                            
                        </div> */}
                    </div>
                </section>
                </div>
                <div>
                <section id="bottom-home-section">
                <div id="bottom-home-content">
                        <div className="bottom-grid-content">
                            <div className="bottom-content-boxb"></div>                            
                        </div>
                        <div className="bottom-title">
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
