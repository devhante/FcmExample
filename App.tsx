import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PushNotification from 'react-native-push-notification';

export default class App extends Component {
  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
      },
    });
  }

  public render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text> Received Push notification </Text>
      </View>
    );
  }
}