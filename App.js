import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './components/Screen1'

export default class App extends React.Component {
  render() {
    console.disableYellowBox=true
    return (
   <Screen1/>
    );
  }
}

