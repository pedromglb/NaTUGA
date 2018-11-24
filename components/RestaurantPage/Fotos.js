import * as React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class Fotos extends React.Component {
   render() {
    return (
      <View>
        <Image
          style={{flex:1, height: 250, width: '100%'}}
          source={require('./otto2.png')}
        />
        <Image
          style={{flex:1, height: 250, width: '100%'}}
          source={require('./otto5.png')}
        />
        <Image
          style={{flex:1, height: 250, width: '100%'}}
          source={require('./otto4.png')}
        />
        <Image
          style={{flex:1, height: 250, width: '100%'}}
          source={require('./otto3.png')}
        />
      </View>
    );
  }
}