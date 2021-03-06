var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');


var ErrorModel = React.createClass({
	getDefaultProps: function(){
		
		return {
			title: 'Error'
		}
		
	},
	propTypes:{
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	componentDidMount : function(){
		var {title,message} = this.props;
		
		var modelMarkup = (
		<div id="error-model" className="tiny reveal text-center" data-reveal="">
		<h4>{title}</h4>
		<p>{message}</p>
		<button className="button" data-close="">Okay</button>
		</div>
		
		
		);
		
		var $model = $(ReactDOMServer.renderToString(modelMarkup));
		$(ReactDOM.findDOMNode(this)).html($model);
		
		var model = new Foundation.Reveal($("#error-model"));
		model.open();
		
	},
	render : function(){
		
		return(
		<div>
		
		</div>
		
		
		);
		
	}
	
	
});
module.exports = ErrorModel;
