import React, {Component} from 'react'

export default class About extends Component{
    render(){
        return(
            <div>
            <section id="about">
                <div className="row">
                    <div className="three columns">
                    <img className="profile-pic" src="images/profile.png" alt="" />
                    </div>
                    <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>I am a Data Analyst with a passion for automation and programming. 
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                            <span>Kyle Dunn</span><br />
                            <span>kdunn.code@gmail.com</span>
                        </p>
                        </div>
                        <div className="columns download">
                        <p>
                        <a href="Kyle Dunn Resume.pdf" download="Kyle Dunn Resume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}