import * as React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class Fotos extends React.Component {
   render() {
    return (
      <View>
        <Image
          style={{flex:1, height: 250, width: '100%'}}
          source={require('./sushi.png')}
        />
        <Image
          style={{flex:1, height: 250, width: '100%'}}
          source={require('./sushi2.png')}
        />
        <Image
          style={{flex:1, height: 250, width: '100%'}}
          source={require('./sushi3.png')}
        />
        <Image
          style={{flex:1, height: 250, width: '100%'}}
          source={require('./sushi4.png')}
        />
      </View>
    );
  }
}