import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

import styles from './styles';

const BMICalculator = React.createClass( {
  getInitialState: function() {
    return {
      showResult: false,
      weight: 50,
      height: 180,
      BMI: 0,
      message: null
    }
  },
  calculateBMI: function() {
    weight = this.state.weight
    height = this.state.height
    if (weight.length > 0 && height.length > 0) {
      BMI = weight/(Math.pow((height/100), 2))
      this.setState({
        showResult: true,
        BMI: BMI,
        message: null
      })
    } else {
      this.setState({
        message: "please fill all the fields",
        showResult: false
      })
    }
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
         onChangeText={(text) => this.setState({weight: text}) }
         keyboardType="numeric"
         style={styles.inputs}/>

        <Text style={styles.label}>height(cm):</Text>

        <TextInput
         onChangeText={(text) => this.setState({height: text}) }
         keyboardType="numeric"
         style={styles.inputs}/>
        <TouchableHighlight
          onPress={this.calculateBMI}>
          <Text style={styles.button}>Calculate</Text>
        </TouchableHighlight>
        <Text style={styles.result}>{this.state.showResult == true ? this.state.BMI : this.state.message }</Text>
      </View>
    )
  }
})

export default BMICalculator;