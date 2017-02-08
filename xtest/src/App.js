import React, { Component } from 'react';
import './App.css';
import Box from './box.js';

class App extends Component {

   constructor(props){
    super(props);
    this.state = {
      name: "alain",
      blue: true
    }
   } 

  touchedMe(){
    alert("oww");
    this.setState({
      name: "omg"
    })
  }

  formSubmit(){
    
  }

  render() {
    let y = <h2> omg </h2>;
    let x = <h1> wow </h1>;
    return (
      <div>
        <Box name="sarah" />
        {y}
        {x}
        <h2 onClick={this.touchedMe.bind(this)} className='test'> {this.state.name}</h2>
        {this.state.blue ?
            <p>test</p>
            :
            <p>no test</p>
        }
        <form onSubmit={this.formSubmit.bind(this)}>
          <label>Name please</label>
          <br />
          <input name="newBox" />
        </form>
      </div>
    );
  }
}

export default App;
