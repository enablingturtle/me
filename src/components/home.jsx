import React, {Component} from 'react'

export default class Home extends Component{
    render(){
        return(
            <header id="home">
            <nav id="nav-wrap">
              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
              <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
              </ul> {/* end #nav */}
            </nav> {/* end #nav-wrap */}
            <div className="row banner">
              <div className="banner-text">
                <h1 className="responsive-headline">I'm Kyle Dunn.</h1>
                <h3>I'm an Orlando based <span>Data Anlyst</span> helping to reign in chaotic data. 
                  <br />Let's <a className="smoothscroll" href="#about">start scrolling </a>
                  and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                <hr />
                <ul className="social">
                  <li><a href="https://www.linkedin.com/in/kyle-dunn-009b90b6/"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="https://github.com/enablingturtle"><i className="fa fa-github-alt" /></a></li>
                  <li><a href="https://twitter.com/EnablingTurtle"><i className="fa fa-twitter" /></a></li>
                </ul>
              </div>
            </div>
            <p className="scrolldown">
              <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
          </header>
        )

    }

}