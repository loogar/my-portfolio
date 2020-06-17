import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">  Glimpse Into My Life </span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at <a target="_blank" rel="noopener noreferrer" href="https://www.flaminem.com/en/"> Flaminem</a> <span>March(2019)-Sepetember(2019)</span></h2>
                        <p>Flaminem is a software vendor for compliance managers in the financial sectors.I did a six months Internship at Flaminem while there i implemented new features to the website like optimizing, adding new roles to the graph with React, JSX, Typescript, Jest, Webpack.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>PostGraduation at <a target="_blank" rel="noopener noreferrer" href="https://www.isep.fr/">ISEP</a> <span>2017-2019</span></h2>
                        <p>I did my Post-graduation studies with major in Software Engineering. It gave me an advanced insight on concepts like DSA, Modern Front-End frameworks and technologies, Back-end technologies and Modern Mobile develoment.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>UnderGrauation at<a target="_blank" rel="noopener noreferrer" href="https://www.bharathuniv.ac.in/"> BharathUniversity </a> <span>2012-2016</span></h2>
                        <p>I completed my UnderGrauation education with major in Information Technology. During my time at the university, I have developed interest in web develoment with introduction to various other computer fundamentals.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
