import React, {Component} from 'react'

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        <li><a href="https://www.linkedin.com/in/kyle-dunn-009b90b6/"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://github.com/enablingturtle"><i className="fa fa-github-alt" /></a></li>
                        <li><a href="https://twitter.com/EnablingTurtle"><i className="fa fa-twitter" /></a></li>
                    </ul>
                    <ul className="copyright">
                    <li>© Copyright 2014 CeeVee</li>
                    <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
                    </ul>
                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        )
    }
}