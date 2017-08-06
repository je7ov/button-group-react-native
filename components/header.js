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
    height: 70 + Constants.statusBarHeight,
    marginBottom: 16,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7070FF',
    elevation: 4,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4}
  },

  title: {
    fontSize: 24,
    fontWeight: '700'
  }
});

export default Header;
