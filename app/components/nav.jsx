import React from 'react'
var {Link, IndexLink}  = require('react-router');


var Nav = React.createClass({
	onSearch: function(e){
		e.preventDefault();
		var location = this.refs.location.value;
		var encodedLocation = encodeURIComponent(location);
		if(location.length > 0){
			window.location.hash = "#/?location=" + encodedLocation;
			this.refs.location.value ="";
		}
	},
	render:function(){
		
		return (
			<div className="top-bar">
			<div className="top-bar-left">
			<ul className="menu">
			<li className="menu-text">Weather App</li>
			<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink></li>
			<li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link></li>
			<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link></li>
			
			</ul>
			
			</div>
			<div className="top-bar-right">
			<form onSubmit={this.onSearch}>
			<ul className="menu">
			<li><input type="search" placeholder="City Name" ref="location"/></li>
			<li><input type="submit" value="Get Weather" className="button"/></li>
			</ul>
			</form>
			</div>
			
			</div>
		);
		
	}
	
})
module.exports = Nav;
			
			
			