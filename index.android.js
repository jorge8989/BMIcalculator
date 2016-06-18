/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

const BMICalculator = React.createClass( {
  render: function() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.title}>
          BMI calculator
        </Text>
        <TextInput
         keyboardType="numeric"
         ref="textFromInput"
         style={styles.inputs}/>
        <TouchableHighlight>
          <Text style={styles.button}>Ok</Text>
        </TouchableHighlight>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#993232',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  inputs: {
    width: 200,
    fontSize: 16,
    padding: 4,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#e0c1c1',
    color: '#4c1919',
    fontSize: 16,
    padding: 10,
    margin: 10,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

AppRegistry.registerComponent('BMICalculator', () => BMICalculator);
