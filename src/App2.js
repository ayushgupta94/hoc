import React, { Component } from 'react';
import './App.css';
import {Wrapper} from'./App1';
import App1 from'./App1';

class App2 extends Component {
    constructor(props){
        super(props);
        console.log("App2 loaded")
      }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        { Wrapper(App1,{handle:()=>{},handleArrow:()=>{}})}
      </div>
    );
  }
}

export default App2;
