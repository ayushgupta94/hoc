import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Wrapper } from './App1';
import App1 from './App1';
import App2 from './App2';
import {counter,data} from './App1';
class App extends Component {
  constructor(props){
    super(props);
    console.log("App loaded")
  }
  handle(){
    console.log(this)
    this.showMsg();
  }
  handleArrow = () => {
    console.log(this)
  }

 
  render() {
    data.a=2;
    console.log(data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { Wrapper(App1,{handle:this.handle,handleArrow:this.handleArrow})}
        <App2/>
        {counter}
      </div>
    );
  }
}

export default App;
