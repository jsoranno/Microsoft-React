import React, {Component} from 'react';
import $ from 'jquery';

class Box extends Component {

	componentDidMount(){
		let whoToTarget = "#" + this.props.name
		$(whoToTarget).show(3000);
	}

	constructor(props){
		super(props);
		this.state = {
			blue: true
		}
	}

	touchedMe(){
	    alert("oww");
	    this.setState({
	      name: "omg"
	    })
	}

	render(){
		return(
			<div className="box" id={this.props.name}>
				{this.props.name}
			</div>
		)	
	}
}
export default Box;