import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Slider from './ogSlider';
import styles from './styles';

export default class App extends Component {
  static propTypes = {
    value: PropTypes.number,
    minimumValue: PropTypes.number,
    maximumValue: PropTypes.number,
    step: PropTypes.number,
    minimumTrackTintColor: PropTypes.string,
    maximumTrackTintColor: PropTypes.string,
    thumbTintColor: PropTypes.string,
    onValueChange: PropTypes.func,
    onSlidingComplete: PropTypes.func,
  }
  static defaultProps = {
    value: 0,
    minimumValue: 0,
    maximumValue: 100,
    step: 0,
    minimumTrackTintColor: '#FFFFFF',
    maximumTrackTintColor: '#FFFFFF',
    thumbTintColor: '#FFFFFF',
    onValueChange: () => {},
    onSlidingComplete: () => {},
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
      onSlidingComplete,
      minimumTrackTintColor,
      maximumTrackTintColor,
    } = this.props;
    return (
      <View style={styles.container}>
        <Slider
          step={step}
          value={value}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          onValueChange={onValueChange}
          trackStyle={styles.trackStyle}
          thumbMode={this.getThumbMode()}
          thumbTintColor={thumbTintColor}
          onSlidingComplete={onSlidingComplete}
          minimumTrackTintColor={minimumTrackTintColor}
          maximumTrackTintColor={maximumTrackTintColor}
        />
      </View>
    );
  }
}
