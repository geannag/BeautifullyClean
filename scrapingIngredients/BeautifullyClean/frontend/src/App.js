import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarMenu from './NavbarMenu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMenu onClick={this.handleShow} />
      </div>
    );
  }
}

export default App;
