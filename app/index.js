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
  View
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $primaryBlue: '#4f6D7A',
  $white: 'white',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
})

export default () => <CurrencyList />;
