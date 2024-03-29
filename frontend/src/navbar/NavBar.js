import React, { Component } from 'react';
import './NavBar.css';


class NavBar extends Component {
    render() {
      return (
        <div className="App">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </ul>
        </div>
      );
    }
  }
  
  export default NavBar;