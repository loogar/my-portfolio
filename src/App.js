import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div id="portfolio-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="portfolio-main">
					<Introduction></Introduction>
					<About></About>
          <Timeline></Timeline>
          <Projects></Projects>
          <Skills></Skills>
         <Contact></Contact>
           <br></br>
           <br></br>

        </div>
      	</div>
      </div>
    );
  }
}

export default App;
