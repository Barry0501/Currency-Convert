/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import  {AlertProvider} from './components/Alert/index'

import { AppStack } from './config/routes';

EStyleSheet.build({
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $primaryBlue: '#4f6D7A',
  $white: 'white',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
})

export default class App extends Component {
  render() {
    return (
      <AlertProvider>
        <View style={{ flex: 1 }}>
          <StatusBar
            backgroundColor='#E8E8E9'
            barStyle="light-content"
            translucent={true}
          />
          <AppStack />
        </View>
      </AlertProvider>

    );
  }
} 
