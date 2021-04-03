import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class AnyColorButton extends Component {
 createAlert=()=>{

   alert("hello everyone i am a virus")

 }

  render(){
    return(
      <Button color={this.props.color} title="Click Me" onPress={this.createAlert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnyColorButton color = "black" />
        <Text>My First React Component</Text>
      </View>
    );
  }
}