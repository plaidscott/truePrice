import React, { Component } from 'react';
import MainNavBar from './Components/MainNavBar';
import VehicleInput from './Components/VehicleInput';
import VehicleCards from './Components/VehicleCards';

// import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavBar/>
          <div className="AppBody">
              <Container>
                  <Row>
                      <Col class="BodyContainer" xs="3">
                          <VehicleInput/>
                      </Col>
                      <Col class="BodyContainer" lg="9">
                          <VehicleCards/>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
    );
  }
}

export default App;
