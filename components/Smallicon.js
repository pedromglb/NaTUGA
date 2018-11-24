import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Smallicon extends React.Component {
  render() {
    return (
        <Image
            source={require('./natuga1.png')}
            style={{ width: 34, height: 43 }}
        />
    );
  }
}