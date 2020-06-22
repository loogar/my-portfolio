import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.gif)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Ragool Krishnan</a></h1>
              <small><a href='https://blog.logrocket.com/history-of-frontend-frameworks/' target="_blank" rel="noopener noreferrer"> Front-End/Mobile Developer</a></small>
            </div>
            <br/>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#Skills" data-nav-section="skills">Skills</a></li>
                <li><a href="#contact" data-nav-section="contact">Contact Me</a></li>
               </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/ragool-krishnan/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/loogar" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://stackoverflow.com/users/13751947/loogar" target="_blank" rel="noopener noreferrer"><i className="icon-stackoverflow"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and React, Bootstrap and special thanks to gh-pages also <i className="icon-hope" aria-hidden="true"></i><br></br>
                Thanks Colorlib & Dhruv Barochia for inspiration & hope.
              </small></p>
            </div>
          </aside>
        </div>
  )
  }
}
