import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Box from './box.js';

class App extends Component {

   constructor(props){
    super(props);
    this.state = {
      name: "alain",
      blue: true,
      arrayOfBoxes: []
    }
   } 

  touchedMe(){
    alert("oww");
    this.setState({
      name: "omg"
    })
  }

  formSubmit(e){
    e.preventDefault();
    let result = e.target.newBox.value;
    let newResult = this.state.arrayOfBoxes.concat(result);
    this.setState({
      arrayOfBoxes: newResult
    })

    $('input').val("");
  }

  render() {
    let y = <h2> omg </h2>;
    return (
      <div>
        {this.state.arrayOfBoxes.map(function(x){
          return(
            <Box name={x} key={x} />
            )
          })}
        
        <Box name="sarah" />
        {y}
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
