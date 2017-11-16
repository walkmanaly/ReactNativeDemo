/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import CButton from './CButton';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeDemo extends Component {
  render() {
    return (
      <View style={{margin: 100}}>
        <CButton style={{height: 50}} enabled={false} />
        <CButton style={{top: 30, height: 50}} />
        <CButton style={{top: 30, height: 50}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
