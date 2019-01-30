import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      firstName:""
    }
    this.handleChange=this.handleChange.bind(this)
  }

  //controlled component 
  //event.target.value will be received from the form 
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    return (
      <form>
        <input 
           type="text" 
           name="firstName" 
           placeholder="First Name" 
           onChange={this.handleChange} 
        />
        <br />
        <h1>{this.state.firstName}</h1>
      </form>
    );
  }
}

export default App;
