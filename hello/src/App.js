import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';

class App extends Component{
render(){
  return (
    <div className="App">
      
      <Greet />

    </div>
  );
}
}

export default App;
