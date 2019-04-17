import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import ProductForm from './inventory/ProductForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductForm />
      </div>
    );
  }
}

export default App;
