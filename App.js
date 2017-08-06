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
        q1: 'None',
        q2: 'None',
        q3: 'None',
        q4: 'None'
      }
    }

    this.genders = [
      {key: 1, gender: 'Boy'},
      {key: 2, gender: 'Girl'}
    ];
    this.colors = [
      {key: 1, color: 'Red'},
      {key: 2, color: 'Blue'},
      {key: 3, color: 'Green'}
    ];
    this.subjects = [
      {key: 1, subject: 'Gym'},
      {key: 2, subject: 'Math'},
      {key: 3, subject: 'Writing'}
    ];
    this.qualities = [
      {key: 1, quality: 'Confident'},
      {key: 2, quality: 'Patient'},
      {key: 3, quality: 'A Leader'}
    ];
  }

  handleOnPress(name, index) {
    const answers = this.state.answers;
    let arr, prop;
    switch (name) {
      case 'q1':
        arr = 'genders';
        prop = 'gender';
        break;
      case 'q2':
        arr = 'colors';
        prop = 'color';
        break;
      case 'q3':
        arr = 'subjects';
        prop = 'subject';
        break;
      case 'q4':
        arr = 'qualities';
        prop = 'quality';
        break;
      default:
        arr = 'genders';
        prop = 'gender';
    }
    answers[name] = this[arr][index][prop];
    this.setState({
      answers
    })
  }

  render() {
    const { q1, q2, q3, q4 } = this.state.answers;

    return (
      <View style={styles.container}>
        <Header title="Button Groups"/>

        <Text style={styles.topText}>{`Choices: ${q1}, ${q2}, ${q3}, ${q4}`}</Text>

        <Text style={styles.question}>Question 1:</Text>
        <ButtonGroup style={styles.group} name="q1" onPress={ (i) => this.handleOnPress('q1', i) }>
          {this.genders.map((gender) => {
            return (<Button text={gender.gender} key={gender.key} />);
          })}
        </ButtonGroup>

        <Text style={styles.question}>Question 2:</Text>
        <ButtonGroup style={styles.group} name="q2" onPress={ (i) => this.handleOnPress('q2', i) }>
          {this.colors.map((color) => {
            return (<Button text={color.color} key={color.key} />);
          })}
        </ButtonGroup>

        <Text style={styles.question}>Question 3:</Text>
        <ButtonGroup style={styles.group} name="q3" onPress={ (i) => this.handleOnPress('q3', i) }>
          {this.subjects.map((subject) => {
            return (<Button text={subject.subject} key={subject.key} />);
          })}
        </ButtonGroup>

        <Text style={styles.question}>Question 4:</Text>
        <ButtonGroup style={styles.group} name="q4" onPress={ (i) => this.handleOnPress('q4', i) }>
          {this.qualities.map((quality) => {
            return (<Button text={quality.quality} key={quality.key} />);
          })}
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
  },

  topText: {
    fontSize: 18,
    margin: 24
  }
});
