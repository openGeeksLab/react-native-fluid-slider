import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
} from 'react-native';

import Slider from './ogSlider';

export default class App extends Component {
  static defaultProps = {
    value: 0,
    minimumValue: 0,
    maximumValue: 1,
    step: 0,
    minimumTrackTintColor: '#FFFFFF',
    maximumTrackTintColor: '#FFFFFF',
    thumbTintColor: '#FFFFFF',
    onValueChange: () => {},
  };

  getThumbMode = () => {
    const {
      value,
      minimumValue,
      maximumValue,
    } = this.props;
    if (value === maximumValue) {
      return 1;
    } else if (value === minimumValue) {
      return -1;
    }
    return 0;
  }

  render() {
    const {
      value,
      step,
      minimumValue,
      maximumValue,
      onValueChange,
      thumbTintColor,
      minimumTrackTintColor,
      maximumTrackTintColor,
    } = this.props;
    return (
      <View style={styles.container}>
        <Slider
          step={step}
          value={value}
          thumbMode={this.getThumbMode()}
          onValueChange={value => onValueChange(value)}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          thumbTintColor={thumbTintColor}
          minimumTrackTintColor={minimumTrackTintColor}
          maximumTrackTintColor={maximumTrackTintColor}
          trackStyle={styles.trackStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  trackStyle: {
    height: 4,
  }
});
