import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Details extends React.Component {
  render(){
    return(
      <View style={{flex: 1}}>
        <View flexDirection="row">
          <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            backgroundColor: 'green',
            borderRadius: 100,
            marginLeft: 10,
            marginTop: 5
          }}>
          <Icon name={'phone'} size={30} color="white" />
          </TouchableOpacity>

          <Text style={{marginTop: 15, marginLeft:5, fontSize: 18}}>308 807 235</Text>
        </View>
        <View style={{flex:1, marginTop: 20, marginLeft: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}} > Morada: </Text>
          <Text style={{fontSize: 16, width: '100%' ,marginLeft: 5}}>Praça Dom Luis I, 34, Loja 9, Cais do Sodré, Lisboa</Text>
        </View>
        <View style={{marginTop: 15, flexDirection:'row'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 10}}>Custo médio:</Text>
          <Text style={{fontSize: 15}}> 12,5€ por pessoa(aprox.)</Text>
        </View>

        <View style={{flex:1, marginTop: 5}}>
          <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 'bold'}}>Extras: </Text>
        </View>
        <View style={{marginLeft: 10, flexDirection:'row'}}>
          <Icon name={'check'} size={20}/>
          <Text>Bar Completo</Text>
          <Icon name={'check'} size={20} style={{marginLeft: 10}}/>
          <Text>Tem Wifi</Text>
          <Icon name={'check'} size={20} style={{marginLeft: 10}}/>
          <Text>Tem vinho a copo</Text>
        </View>
        <View style={{marginLeft: 10, flexDirection:'row',marginBottom: 20}}>
          <Icon name={'check'} size={20}/>
          <Text>Cozinha Italiana</Text> 
        </View>   
      </View> 

    ); 
  }
}