import React, { Component } from 'react'

import Header from './header.js'
import FAQ from './faq.js'
import Footer from './footer.js'

class About extends Component {
	render(){
		return(
			<div>
				<Header />
			<div className="row" id="featured-2">
				  <div className="col-sm-8">
				    <h2>Welcome to the Caltech ETDB, the blockchain-based Web 3.0 database of 10,000+ electron tomograms. </h2>
				  </div>
				</div>
                <div id="space150"></div>
				<div className="row" id="about">
                <div className="col-sm-12">	<h3>About Electron tomography</h3>
				      <div id="reddiv"></div>
                      </div>
				  <div className="col-sm-6">				      
                        <p>Electron tomography is a form of transmission electron microscopy in which a sample is tilted during imaging, typically one or two degrees between images, building up a "tilt-series" of images that can be computationally reconstructed into a 3D view of the sample, or "tomogram." In essence, electron tomography takes a CT scan of a cell.</p>				    </div>

				  <div className="col-sm-6"> 
               
                  <p>Currently, the majority of tomograms in the ETDB were acquired by cryo-EM, in which cells in standard growth media are plunged into a cryogen that freezes them so rapidly that the water molecules don't have a chance to rearrange into a crystalline lattice, preserving cell structures in vitreous, or glass-like, amorphous ice.  Vitrified cells can be imaged directly by electron tomography, without the need for fixation, dehydration, resin-embedding or staining.  This captures the cells in an essentially native state.</p>
                  </div>
				</div>
				<div className="row" id="about">
				  <div className="col-sm-6">
				    <div>
				      <h3>By making this data available, we hope others will use it to fuel their own discoveries.  </h3>
				      <div id="reddiv"></div>
				      <p>In addition to its value for cell biologists, the ETDB offers a massive dataset for software developers to develop, test and improve image processing algorithms. We have some ideas for areas particularly ripe for improvement; check them out on the Scientific Challenges page.</p>
                      <a className="browse" href="/challenges">View challenges <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
				    </div>
				  </div>
                  <div className="col-sm-6">			  		<img src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/03/challenges.png"/>
</div>

				</div>
				<div className="row" id="about">
                
				  <div className="col-sm-6">
                  <h3>Built with Blockchain</h3>			  		 
				      <div id="reddiv"></div>
				      <p> Bitcoin introduced blockchain technology to the world, but blockchain can be used in many ways. A blockchain is a digital ledger that anyone can use or audit, and no one can change. A blockchain uses peer-to-peer networking to achieve network consensus without central points of failure. The Inter Planetary File System (IPFS) is a protocol and network designed to create a content-addressable, peer-to-peer method of storing and sharing content in a distributed file system. </p>

</div>
				  <div className="col-sm-6">
				    <div>
                   
<p>The Open Index Protocol (OIP) specification uses the FLO blockchain to index metadata and interoperable transport protocols like Bitcoin and IPFS for value and file transfer. The system provides persistent file storage and permissionless access. The result is a robust, decentralized database open to anyone through open-source software. </p>

<p>ETDB is built on the OIP specification. The addresses of the tomograms, and their corresponding metadata, are stored in the public FLO blockchain and the tomogram files are stored in the IPFS network. While etdb.caltech.edu offers one way to access the database, users are free to create their own applications to retrieve and interact with the data. </p>
				    </div>
				  </div>
				</div>
				<div className="row" id="about">
				  <div className="col-sm-6">
				    <div>
				      <h3>Learning more</h3>
				      <div id="reddiv"></div>
				      <p>If you are interested in learning more about tomograms, this database and other research conducted by the Jensen Lab please <a href="/contact">get in touch</a></p>
                      <p>Many of these datasets have been used in studies resulting in scientific publications. You can view a list of these publications on the <a target="blank" href="https://jensenlab.caltech.edu/publications/">Jensen Lab</a> website.
</p>
                      <a className="browse" href="http://www.jensenlab.caltech.edu">Jensen Lab <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
				    </div>
				  </div>

                  <div className="col-sm-6">			  		<img src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/03/cell.png"/>
</div>
				</div>
				<a name="FAQ"></a> 
                <FAQ />
				<Footer />
			</div>
		)
	}
}

export default About;