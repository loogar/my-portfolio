import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="portfolio-work" data-section="projects">
					<div className="portfolio-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="portfolio-heading animate-box">Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <a href="https://github.com/loogar/Tetris-game-with-react-ts" target="_blank" rel="noopener noreferrer">
								<div className="project" style={{backgroundImage: 'url(images/project-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/loogar/Tetris-game-with-react-ts" target="_blank" rel="noopener noreferrer">Tetris Game</a></h3>
											<span>A modern tetris game,Made with react and type script.</span>
									</div>
									</div>
								</div>
              </a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                  <a href="https://loogar.github.io/Budget-planning/" target="_blank" rel="noopener noreferrer">
								<div className="project" style={{backgroundImage: 'url(images/project-2.JPG)'}}>
									<div className="desc">
										<div className="con">
											<h3> <a href="https://loogar.github.io/Budget-planning/" target="_blank" rel="noopener noreferrer">Budget Planning app</a></h3>
											<span>A Budget Planning App build with javascript uses git pages to deploy.</span>
											</div>
									</div>
								</div>
              </a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                <a href="https://github.com/loogar/Smart-home" target="_blank" rel="noopener noreferrer">
								<div className="project" style={{backgroundImage: 'url(images/project-3.JPG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/loogar/Smart-home" target="_blank" rel="noopener noreferrer">Smart Home</a></h3>
											<span>We created a website that allows users to control their home. We used a SQL database to store the registered users and allow them to add the sensors they use,
                        the database. Users have also been allowed to add new sensors and as much as necessary.</span>
										</div>
									</div>
								</div>
              </a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                <a href="https://github.com/loogar/Change" target="_blank" rel="noopener noreferrer">
								<div className="project" style={{backgroundImage: 'url(images/project-4.PNG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/loogar/Change">The Change</a></h3>
											<span>House exchange site
                         We Created a website that allows users to exchange their homes during their holidays.
                         This site allows two users to communicate in according to their needs and availability.</span>
										</div>
									</div>
								</div>
              </a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <a href="https://github.com/loogar/BMI_Calculator" target="_blank" rel="noopener noreferrer">
								<div className="project" style={{backgroundImage: 'url(images/project-5.JPG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/loogar/BMI_Calculator" target="_blank" rel="noopener noreferrer">BMI Calculator App</a></h3>
											<span>A Bmi Calculator build with Flutter For Both IOS and Android.</span>
										</div>
									</div>
								</div>
              </a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                <a href="https://loogar.github.io/pig-game-with-js/" target="_blank" rel="noopener noreferrer">
              	<div className="project" style={{backgroundImage: 'url(images/project-6.JPG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://loogar.github.io/pig-game-with-js/" target="_blank" rel="noopener noreferrer">Pig Game</a></h3>
											<span>This Pig Dice Game Is Build With javascript and Deployed using Git pages.</span>
											</div>
									</div>
								</div>
              </a>
							</div>
						</div>
				</div>
				</section>
      </div>
    )
  }
}
