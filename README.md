
<p align="left">
  <a href="https://www.opengeekslab.com" target="_blank">
  <img src="https://raw.githubusercontent.com/openGeeksLab/react-native-fluid-slider/develop/header_github_fluid.png?token=ADh7RWnDlipsJqGwoIkzlzORbEHDcO1Yks5bsdPJwA%3D%3D" width="100%" title="openGeeksLab"/>
  </a>
</p>

<a href="http://developer.apple.com" rel="nofollow"><img  alt="iOS" src="https://img.shields.io/badge/platform-iOS-brightgreen.svg" style="max-width:100%;"></a> <a href="https://www.android.com" rel="nofollow"><img src="https://img.shields.io/badge/platform-Android-brightgreen.svg" alt="iOS" data-canonical-src=" https://img.shields.io/badge/platform-Android-brightgreen.svg" style="max-width:100%;"></a>
<a href="https://github.com/openGeeksLab/react-native-fluid-slider">
  <img src="https://img.shields.io/badge/npm-compatible-green.svg" alt="npm compatible" data-canonical-src="https://img.shields.io/badge/npm-compatible-green.svg" style="max-width:100%;"></a>
<a href="http://twitter.com/openGeeksLab" rel="nofollow"><img src="https://img.shields.io/badge/Twitter-@openGeeksLab-blue.svg" alt="Twitter" data-canonical-src="https://img.shields.io/badge/Twitter-@openGeeksLab-blue.svg?style=flat" style="max-width:100%;"></a>
  <a href="http://facebook.com/openGeeksLab/"><img src="https://img.shields.io/badge/facebook-us-blue.svg" alt="Facebook" data-canonical-src="https://img.shields.io/badge/facebook-us-blue.svg" style="max-width:100%;"></a>
  <a href="https://medium.com/@openGeeksLab"><img src="https://img.shields.io/badge/Medium-story-brightgreen.svg" alt="Medium" data-canonical-src="https://img.shields.io/badge/Medium-story-brightgreen.svg" style="max-width:100%;"></a>
  </p>
  <img src="https://raw.githubusercontent.com/openGeeksLab/react-native-fluid-slider/develop/animated_fluid_slider.gif?token=ADh7RT9pp84mq0t00RgFXPYS1rVE7UP-ks5bsdPkwA%3D%3D" alt="Slider" data-canonical-src="https://raw.githubusercontent.com/openGeeksLab/react-native-fluid-slider/develop/animated_fluid_slider.gif?token=ADh7RT9pp84mq0t00RgFXPYS1rVE7UP-ks5bsdPkwA%3D%3D" width="50%" height="50%"style="max-width:100%;">

# About
Our company provides custom UI design and development solutions for mobile applications and websites.

Need a team to create a project?

This project is developed and maintained by <a href="https://www.openGeeksLab.com">openGeeksLab LLC.</a>

<a href="mailto:info@opengeekslab.com?subject=Project%20inquiry%20from%20Github">
<img src="https://raw.githubusercontent.com/openGeeksLab/docs/master/contact_our_team.png" width="25%" height="25%" style="max-width:100%;"></a>

# react-native-fluid-slider

## Requirements
- React Native 0.50+
- iOS 9.0+
- Android 4.2+

## Installation
Just run:
- npm i @opengeekslab/react-native-fluid-slider

## Basic usage
```javascript
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Slider from '@opengeekslab/react-native-fluid-slider';

export default class App extends Component {
  state = { value: 40 }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          <Text style={styles.valueText}>
            {this.state.value.toFixed()}
          </Text>
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 70,
  },
  sliderContainer: {
    width: '100%',
  },
  valueText: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#ee6d51',
  },
});
```
## Properties
  `value` -  is the value of the slider.   
  `step` -  is the slider step.   
  `minimumValue` - is the minimum value.  
  `maximumValue` - is the maximum value.  
  `onValueChange` - it is called when the value of the slider is changed and  getting the new slider value parameter.  
  `thumbTintColor` - is the slider color.  
  `minimumTrackTintColor` - is the color of the slider track on the left of the slider.  
  `maximumTrackTintColor` - is the color of the slider track on the right of the slider.  
 # Contact us if interested.
<a href="https://opengeekslab.com/contact-us/">
<img src="https://raw.githubusercontent.com/openGeeksLab/docs/master/contact_our_team.png" width="25%" height="25%" style="max-width:100%;"></a>

# Licence
Expanding is released under the MIT license.
