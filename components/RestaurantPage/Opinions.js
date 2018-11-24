import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Opinions extends React.Component {
   
  render(){
    return(
      <View style={{flex:1, marginTop: 10}}>
        <View style={{flexDirection: 'row'}}>
          <TextInput style={{ width: 45,
            height: 45, borderRadius: 50, borderWidth: 1, marginLeft: 30, borderColor:'gray', textAlign:'center'}}
            placeholder="0 a 5"/>
          <TextInput style={{ width: 45,
            height: 45, borderRadius: 50, borderWidth: 1, marginLeft: 40, borderColor:'gray', textAlign:'center'}}
            placeholder="0 a 5"/>
          <TextInput style={{ width: 45,
            height: 45, borderRadius: 50, borderWidth: 1, marginLeft: 
            40, borderColor:'gray', textAlign:'center'}}
            placeholder="0 a 5"
            />
          <TextInput style={{ width: 45,
            height: 45, borderRadius: 50, borderWidth: 1, marginLeft: 40, borderColor:'gray', textAlign:'center'}}
            placeholder="0 a 5"
            />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft:20}}>Ambiente</Text>
          <Text  style={{marginLeft:35}}>Comida</Text>
          <Text  style={{marginLeft:35}}>Higiene</Text>
          <Text  style={{marginLeft:40}}>Serviço</Text>
        </View>
        <View style={{borderColor: 'gray', borderWidth: 1, marginTop:20, padding: 5, marginLeft: 10, width: 340}} >
          <TextInput
            style={{height: 40}}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
        </View>
        <View style={{width:100, height:100, marginLeft: 250}}>
          <Button title="Registar">
          </Button>
        </View>
        <View style={{marginTop: -40, marginLeft:5, flexDirection:'row'}}>
          	<Icon name={"account-circle"} size={40}/>
            <View style={{borderWidth:1, padding:5, width: 305, marginTop:15}}>
              <TextInput
              style={{height: 40, width: 305}}
              editable={false}
              multiline={true}
              numberOfLines={3}
              adjustsFontSizeToFitHeight={true}
              value={'Ambiente fantástico e atendimento excepcional!! :)'}
              />
            </View>
        </View>
      </View>
    );
  }
}