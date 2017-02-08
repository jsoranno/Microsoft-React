import React, { Component } from 'react';
import './App.css';

class App extends Component {

   constructor(props){
    super(props);
    this.state = {
      name: "alain"
    }
   } 

  touchedMe(){
    alert("oww");
    this.setState({
      name: "omg"
    })
  }

  render() {
    let y = <h2> omg </h2>;
    let x = <h1> wow </h1>;
    return (
      <div>
        {y}
        {x}
        <h2 onClick={this.touchedMe.bind(this)} className='test'> {this.state.name}</h2>
      </div>
    );
  }
}

export default App;
