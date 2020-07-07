import React, { Component } from 'react'
import Typed from 'react-typed';
import ParticlesBg from 'particles-bg'

export default class Introduction extends Component {

  render() {
    return (
      <div>
        <section id="portfolio-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              {/*<li style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(images/img_bg1.png)'}}>*/}
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>


              <ParticlesBg num={50} color="#FFFAFA" type="cobweb" bg={true} />

                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">

                          <h1 style={introStyles}>

                           <Typed
                              strings={['Hello,I am Ragool']}
                              typeSpeed={100}
                              backSpeed={100}
                          />
                        </h1>
                        <h3 style={introStyles}>
                          <Typed
                              strings={['Front-end developer',
                                'Mobile Developer',
                                'Writer',
                                'So it goes.'
                              ]}
                              typeSpeed={100}
                              backSpeed={100}
                              loop
                          />
                      </h3>
                          <div class="dropdown">
  <span className="btn btn-outline-danger btn-learn">View My Résumés <i className="icon-briefcase3" /></span>
  <div class="dropdown-content">
  <p><a href="https://drive.google.com/file/d/1bnPMt3tLSU15285l2WjJ54p2xCo2F2l3/view?usp=sharing" target="_blank" rel="noopener noreferrer">English </a></p>
  <p><a href="https://drive.google.com/file/d/1-gfyaLDzsidVm3_Ha0WJzOZVYOK1WfC7/view?usp=sharing" target="_blank" rel="noopener noreferrer">Française</a></p>

  </div>
  </div>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </section>
      </div>
    )
  }
}

let introStyles ={
      color: '#FCF6F5FF',
      fontFamily: "Quicksand",
      fontWeight: '300',
      width: 'auto',
  }
