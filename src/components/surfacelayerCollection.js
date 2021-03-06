import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class surfacelayerCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="row" id="featured-2">
					<div className="col-sm-8">
						<h2>Surface Layer</h2>
					</div>
                    <div className="col-sm-4">
					<a className="back" href="http://localhost:9156/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div className="row" id="featured-3">
					<div className="col-sm-6">
						<div id="reddiv"></div>
						<p> Many archaeal cells, as well as some bacteria, use an extracellular layer of crystalline protein for protection from turgor pressure, viral attack, or predation (among other things). </p>
					</div>
					<div className="col-sm-6">
                    <div id="reddiv"></div>
						<p>The proteins that make these surface layers, or S-layers, differ between species and S-layers vary widely in symmetry and appearance.  Here are some examples:  </p>
					</div>
				</div>
				<div className="row" id="featured"></div>
				<Footer />
			</div>
		)
	}
}

export default surfacelayerCollection;