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
  getInitialState: function() {
    return {
      showResult: false,
      weight: 50,
      height: 1.80,
      BMI: 0,
    }
  },
  calculateBMI: function() {
    weight = this.state.weight
    height = this.state.height
    BMI = weight/(Math.pow(height, 2))
    this.setState({
      showResult: true,
      BMI: BMI
    })
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.title}>
          BMI calculator
        </Text>
        <Text style={styles.label}>weight:</Text>
        <TextInput
         defaultValue="0"
         keyboardType="numeric"
         ref="weight"
         style={styles.inputs}/>
        <Text style={styles.label}>height:</Text>
        <TextInput
         defaultValue="0"
         keyboardType="numeric"
         ref="height"
         style={styles.inputs}/>
        <TouchableHighlight
          onPress={this.calculateBMI}>
          <Text style={styles.button}>Calculate</Text>
        </TouchableHighlight>
        <Text style={styles.result}>{this.state.showResult == true ? this.state.BMI : null }</Text>
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
    backgroundColor: '#fff',
    margin: 10
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
  },
  result: {
    fontSize: 20,
    color: '#fff'
  },
  label: {
    fontSize: 16,
    color: '#fff',
    margin: 5
  }
});

AppRegistry.registerComponent('BMICalculator', () => BMICalculator);
