// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isTouchDevice} from '../modules/utility';
import DeliveryOptionSection from './DeliveryOptionSection/DeliveryOptionSection';
import DeliveryOptions from '../api/mockDeliveryOption';


import '../styles/main.scss';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();

    this.data = DeliveryOptions;
  }

  componentDidMount() {
    this.touchDevice = isTouchDevice();
    if (!this.touchDevice) this.addNontouchClass();
  }

  addNontouchClass() {
    this.app.classList.add('nontouch');
  }

  render() {
    return (
       <div className="App" ref={(app) => this.app = app}>
         <DeliveryOptionSection deliveryOptions={DeliveryOptions}/>
         {this.props.children}
       </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
