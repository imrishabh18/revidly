import React, { Component } from "react";
import "./App.css";
import Navbar from './components/navbar';
import Home from './components/home';
import Options from './components/options';

class App extends Component {
  render() {
    return(
      <div>
      <Navbar />
      <Home />
      <Options />
      </div>
    )
  }
}
export default App;
