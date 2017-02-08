import React, {Component} from 'react';

class Box extends Component {

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
		if (this.state.blue){
			return<div className="box">blue</div>
		}else{
			return<div>red</div>
		}
	}
}
export default Box;