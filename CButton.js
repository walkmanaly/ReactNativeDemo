import React from 'react';
import {requireNativeComponent} from 'react-native';

class CButton extends React.Component {
  
  render () {
    return <RCTButton {...this.props} />;
  }
  
}
CButton.propTypes = {
  enabled: React.PropTypes.bool
};

var RCTButton = requireNativeComponent('RCTButton', CButton)
module.exports = CButton;
