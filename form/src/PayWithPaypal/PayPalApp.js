import React, { Component } from 'react';
import PaypalButton from './PaypalButton';
import { PAYPAL_CLIENT_ID } from '../Constants';

class PayPalApp extends Component {
  state = {
    showPaypal: false
  };

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
    const { showPaypal } = this.state;
    if (showPaypal) {
      return <PaypalButton />;
    } else {
      return (
        <div className="main">
          {console.log(">>>>>>>>>>>>>>>>>>>>>>>>>",PAYPAL_CLIENT_ID)}
          <h3>
            <b>$200</b>
          </h3>
          <button onClick={this.showPaypalButtons}> Pay </button>
        </div>
      );
    }
  }
}

export default PayPalApp;