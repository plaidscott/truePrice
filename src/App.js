import React, { Component } from 'react';
import MainNavBar from './Components/MainNavBar';

// import logo from './logo.svg';
import './App.css';
// import { Button, Jumbotron } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavBar/>
      </div>
    );
  }
}

export default App;
