import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Icon extends React.Component {
  render() {
    return (
        <Image
            source={require('../public/natuga1.png')}
        />
    );
  }
}
