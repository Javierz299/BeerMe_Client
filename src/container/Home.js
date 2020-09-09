import React, { Component } from 'react'

export class Home extends Component {


    render() {
        return (
            <div id="home-contaier">
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
                <section id="middle-home-section">
                        <div><h1>Track your progress</h1></div>
                        <div><h3>show picture of form</h3></div>
                        <div><h3>show picture of stats</h3></div>
                </section>
                <section id="bottom-home-section">
                <div><h1>Follow your friends</h1></div>
                        <div><h3>show pic of friends</h3></div>
                        <div><h3>show picture of detailed friend stats</h3></div>
                </section>
                
            </div>
        )
    }
}

export default Home
