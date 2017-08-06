import React from 'react';
import { View } from 'react-native';
import Button from './button';

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.state = {
      active: -1
    };
  }

  handleOnPress(index) {
    this.setState({ active: [index] });
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      if (child.type === Button) {
        return React.cloneElement(child, {
          name: this.props.name,
          onPress: () => {
            this.handleOnPress(i);
            if (this.props.onPress) {
              this.props.onPress(i);
            }
          },
          active: Number(this.state.active) === i
        });
      }
      return child;
    });
  }

  render() {
    return (
      <View style={this.props.style}>
        { this.renderChildren() }
      </View>
    );
  }
}

export default ButtonGroup;
