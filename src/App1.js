import React, { Component } from 'react';
import './App.css';

export const Wrapper = (App1,rest) =>  {
  console.log({...rest})
 return <App1 theme={'dark'} {...rest}/>
} 
console.log("App1 evaluated")
export let counter=0;
export let data={a:1};
class App1 extends Component {
  constructor(props){
    super(props);
    console.log("App1 loaded");
    this.state = {
    counter :0
    }
  }
  
  updateState = () => {
    console.log(this)
    var temp=this.state.counter +1;
    counter=counter+1;
    console.log(temp)
    this.setState({counter:++temp});
  }
  showMsg = () =>{
    alert('App1')
  }
  render() {
    setTimeout(()=>console.log(data),5000)
    console.log(this.props);
    return (
      <div className="App">
       <button onClick={this.props.handle.bind(this)}>handle</button>
       <button  name={`${this.props.theme}1`} onClick={this.props.handleArrow}>handleArrow</button>
        <p className="App-intro">
          ======================================================
        </p>
        <p>****************{this.state.counter}**************</p>
        <button onClick={this.updateState}>handle</button>
        

      </div>
    );
  }
}

export default App1;
