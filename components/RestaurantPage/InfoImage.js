import * as React from 'react';
import { View, Text, Image } from 'react-native';
export default class InfoImage extends React.Component {
  render(){
    return(
      <Image
        source={require('./otto.png')}
        style={{flex:1, height: undefined, width: undefined}}
      />
    ); 
  }
}