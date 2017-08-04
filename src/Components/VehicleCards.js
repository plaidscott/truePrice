import React, { Component } from 'react';

import '../styles/VehicleCards.css';

var api = require('../utils/api.js');

class VehicleCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicleImage: ''
    }
  }

  componentDidMount() {
      api.test()
        .then(response => {
          console.log('response from testMethod in VehicleCards', response[0].img)
          this.setState({
            vehicleImage: response[0].img
          })
        })
  }
  render() {
      return (
          <div className="VehicleCardMain">
              <p>There is stuff in the VehicleCards</p>
              <div>
                <img alt={'testImage'} src={this.state.vehicleImage} />
                <p>There is so much stuff in Vehicle Cards, it is just really hard to imagine how much more stuff there could be. Could there be any more things in this section?</p>
              </div>
          </div>
      );
  }
}

export default VehicleCards;
