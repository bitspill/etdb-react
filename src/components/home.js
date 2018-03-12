import React, { Component } from 'react'

import logo from '../assets/img/etdb-logo.png'
import red from '../assets/img/red.jpg'

class Home extends Component {
	render(){
		return(
			<div>
				<div id="headerfixed">
				  <div class="transparent" id="topbar">
				    <div class="row">
				      <div class="col-sm-6"><a href="./index.js"></a><img class="black-logo" src={logo} /></div>
				      <div class="col-sm-6">
				        <div id="menu"><a href="./about">About</a><a href="./database">Browse Database</a><a href="./featured">Featured Tomograms</a><a href="http://www.designing-science-development.com/jensen/about/#faq">FAQ</a><a href="./contact">Contact</a></div>
				      </div>
				    </div>
				  </div>
				</div>
				<div id="home-image">
				  <div id="home-image-container"><img src={red}/></div>
				</div>
				<div class="row" id="homecontent">
				  <div class="col-sm-6" id="homehero"></div>
				  <div class="col-sm-6" id="homesecondary">
				    <div>
				      <h3>Caltech Electron Tomography Database</h3>
				      <h6>Cryo-electron tomography is a specialized imaging technique used to produce high-resolution, three-dimensional views of cells</h6><a class="browse" href="/database">Browse database <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}

export default Home;