import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={StyleSheet.flatten([styles.container, {backgroundColor: this.props.active ? '#9999FF' : '#C2C2FF'} ])}
        onPress={this.props.onPress}
        activeOpacity={0.6}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    minWidth: 70,
    height: 40,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 24,
    paddingRight: 24,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },

  text: {
    fontSize: 18
  }
});

export default Button;
