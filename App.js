import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Button from './components/button';
import ButtonGroup from './components/buttonGroup';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Button Groups"/>

        <Text style={styles.question}>Question 1:</Text>
        <ButtonGroup style={styles.group} name="question1">
          <Button text="Option 1" />
          <Button text="Option 2" />
          <Button text="Option 3" />
          <Button text="Option 4" />
        </ButtonGroup>

        <Text style={styles.question}>Question 2:</Text>
        <ButtonGroup style={styles.group} name="question2">
          <Button text="Option 1" />
          <Button text="Option 2" />
          <Button text="Option 3" />
        </ButtonGroup>

        <Text style={styles.question}>Question 3:</Text>
        <ButtonGroup style={styles.group} name="question3">
          <Button text="Option 1" />
          <Button text="Option 2" />
          <Button text="Option 3" />
          <Button text="Option 4" />
        </ButtonGroup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },

  group: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12
  },

  question: {
    fontSize: 24,
    marginBottom: 12
  }
});
