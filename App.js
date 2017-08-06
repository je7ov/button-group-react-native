import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Button from './components/button';
import ButtonGroup from './components/buttonGroup';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.state = {
      answers: {
        q1: -1,
        q2: -1,
        q3: -1
      }
    }
  }

  handleOnPress(name, index) {
    const ans = this.state.answers;
    ans[name] = index;
    this.setState({
      answers: ans
    })
  }

  render() {
    const { q1, q2, q3 } = this.state.answers;

    return (
      <View style={styles.container}>
        <Header title="Button Groups"/>

        <Text>{`Choices: ${q1+1}, ${q2+1}, ${q3+1}`}</Text>

        <Text style={styles.question}>Question 1:</Text>
        <ButtonGroup style={styles.group} name="q1" onPress={ (i) => this.handleOnPress('q1', i) }>
          <Button text="Option 1" />
          <Button text="Option 2" />
          <Button text="Option 3" />
          <Button text="Option 4" />
        </ButtonGroup>

        <Text style={styles.question}>Question 2:</Text>
        <ButtonGroup style={styles.group} name="q2" onPress={ (i) => this.handleOnPress('q2', i) }>
          <Button text="Option 1" />
          <Button text="Option 2" />
          <Button text="Option 3" />
        </ButtonGroup>

        <Text style={styles.question}>Question 3:</Text>
        <ButtonGroup style={styles.group} name="q3" onPress={ (i) => this.handleOnPress('q3', i) }>
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
