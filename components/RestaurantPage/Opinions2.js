import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Opinions2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ambiente: 0,
      comida: 0,
      higiene: 0,
      servico: 0,
      text: '',
      food: 0,
      music: 0,
      servers: 0,
      clean: 0,
      todoText: '',
      visible: false
    };
     this._onPressButton = this._onPressButton.bind(this);
  }
  
  _onPressButton () {
    this.setState({visible: true});
    this.setState({food: this.state.comida})
    this.setState({music: this.state.ambiente})
    this.setState({servers: this.state.servico})
    this.setState({clean: this.state.higiene})
    this.setState({todoText: this.state.text})
    this._textInput.setNativeProps({text: ''});
    this.setState({comida: 0});
    this.setState({ambiente: 0});
    this.setState({servico: 0});
    this.setState({higiene: 0});
  }

  render(){ 
    const {ambiente, comida, higiene, servico, text, food, music, servers, clean, todoText, visible} = this.state;

    var concatText =(
    <View style={{marginTop: 10, padding:0, marginLeft:5, flexDirection:'row'}}>
      <Icon name={"account-circle"} size={40}/>
      <View style={{borderWidth:1, borderColor:"grey", width: 305, marginTop:15, marginBottom: 20}}>
        <Text> {todoText}</Text>
        <Text></Text>
        <Text> Ambiente:{music} Comida:{food}  Higiene:{clean}  Servico:{servers}
        </Text>
      </View>
    </View>
  );

   var concat;
    if(this.state.visible){
      concat = concatText;
    }
   
    return(
      <View style={{flex:1, marginTop: 10}}>
        <View style={{flexDirection: 'row'}}>
          <TextInput style={{ width: 45,
            height: 45, borderRadius: 50, borderWidth: 1, marginLeft: 30, borderColor:'gray', textAlign:'center'}}
            placeholder="0 a 5"
            underlineColorAndroid = "transparent"
            keyboardType = "numeric"
            maxLength = {1}
            value={ambiente}
            onChangeText = {(ambiente) => this.setState({ambiente})}
            />
          <TextInput style={{ width: 45,
            height: 45, borderRadius: 50, borderWidth: 1, marginLeft: 40, borderColor:'gray', textAlign:'center'}}
            placeholder="0 a 5"
            underlineColorAndroid = "transparent"
            keyboardType = "numeric"
            maxLength = {1}
            value={comida}
            onChangeText = {(comida) => this.setState({comida})}
            />
          <TextInput style={{ width: 45,
            height: 45, borderRadius: 50, borderWidth: 1, marginLeft: 
            40, borderColor:'gray', textAlign:'center'}}
            placeholder="0 a 5"
            underlineColorAndroid = "transparent"
            keyboardType = "numeric"
            maxLength = {1}
            value={higiene}
            onChangeText = {(higiene) => this.setState({higiene})}
            />
          <TextInput style={{ width: 45,
            height: 45, borderRadius: 50, borderWidth: 1, marginLeft: 40, borderColor:'gray', textAlign:'center'}}
            placeholder="0 a 5"
            underlineColorAndroid = "transparent"
            keyboardType = "numeric"
            maxLength = {1}
            value={servico}
            onChangeText = {(servico) => this.setState({servico})}
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
            style={{height: 60, textAlignVertical:'top'}}
            ref={component => this._textInput = component}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            onChangeText = {(text) => this.setState({text})}/>
        </View>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style = {{width: 100, height: 35, borderWidth: 2, borderColor: '#BC5800', justifyContent: 'center', backgroundColor: '#ff7700', marginLeft: 250, marginTop: 0.5}} >
            <Text style = {{ fontSize: 20, textAlign: 'center', color: 'white'}}> Registar </Text>
          </View>
        </TouchableOpacity>
        {concat}
        <View style={{marginTop: 10, padding:0, marginLeft:5, flexDirection:'row'}}>
          <Icon name={"account-circle"} size={40}/>
          <View style={{borderWidth:1, borderColor:"grey", width: 305, marginTop:15, marginBottom: 20}}>
            <Text>Comida razoavel, podia ser melhor </Text>
            <Text></Text>
            <Text>Ambiente:2  Comida:3  Higiene:2  Servico:2 </Text>
          </View>
        </View>
        <View style={{marginTop: 10, padding:0, marginLeft:5, flexDirection:'row'}}>
          <Icon name={"account-circle"} size={40}/>
            <View style={{borderWidth:1, borderColor:"grey", width: 305, marginTop:15, marginBottom: 20}}>
            <Text>Sushi claramente fora do prazo</Text>
            <Text></Text>
            <Text>Ambiente:2 Comida:1  Higiene:1 Servico:2 </Text>
          </View>
        </View>
      </View>
    );
  }
}

