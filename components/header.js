import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7070FF',
    height: 70 + Constants.statusBarHeight,
    paddingTop: Constants.statusBarHeight,
    marginBottom: 16
  },

  title: {
    fontSize: 24,
    fontWeight: '700'
  }
});

export default Header;
