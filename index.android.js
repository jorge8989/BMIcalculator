/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import {
  AppRegistry,
  Navigator,
  View
} from 'react-native';

import React, { Component } from 'react';

import HomeScreen from './HomeScreen';

const BMICalculator = React.createClass( {
  render: function() {
    return (
      <Navigator
        initialRoute={{name: 'home', index: 0}}
        renderScene={(route, navigator) => 
          { 
            var components = { home: HomeScreen }
            var Component = components[route.name]
            if (route.name == 'home') { 
              return ( <Component name={route.name}/> )
            }
          }
        }
      />
    )
  }
})


AppRegistry.registerComponent('BMICalculator', () => BMICalculator);
