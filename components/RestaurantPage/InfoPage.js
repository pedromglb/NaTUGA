import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView} from 'react-native';
import InfoImage from './InfoImage.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ButtonGroup} from 'react-native-elements';
import Details from './Details';
import Opinions from './Opinions';
import Fotos from './Fotos';
import MenuInterativo from './MenuInterativo';

export default class InfoPage extends React.Component {

  static navigationOptions = {
    title: 'Informação Restaurante',
    headerStyle: {
      backgroundColor: '#FF7700',
    }
  };  

  constructor(props) {
    super(props)
    this.state = {
      selectedButtonIndex: 0
    };

    this.updateIndex = this.updateIndex.bind(this);
    this._onPressButton = this._onPressButton.bind(this);
  }

  updateIndex(selectedButtonIndex){
    this.setState({selectedButtonIndex: selectedButtonIndex})
    
  }

  _onPressButton() {
    alert('clicked');
  }

  render() {
    const buttons = ['Detalhes', 'Opiniões', 'Fotos', 'Menu Interativo']
  const {selectedButtonIndex} = this.state
  let button;
  if(this.state.selectedButtonIndex == 0){
    button = <Details/>
  }
  else if(this.state.selectedButtonIndex == 1){
    button = <Opinions/>
  }
  else if(this.state.selectedButtonIndex == 2){
    button = <Fotos/>
  }
  else
    button = <MenuInterativo/>
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior= "padding">
      <ScrollView style={{}}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ widht: '100%', height: 200, borderBottomWidth: 3 }}>
              <InfoImage />
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0)',
                  width: '100%',
                  position: 'absolute',
                  bottom: -10,
                  left: 300,
                  paddingHorizontal: 3,
                  paddingVertical: 3,
                }}>
                <Icon.Button
                  name="map-marker-radius"
                  color="rgba(160, 0, 0, 1)"
                  size={50}
                  backgroundColor="transparent"
                  onPress={this._onPressButton}
                />
              </View>
            </TouchableOpacity>
            <View>
              <View style={{ flexDirection:'row' }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 28,
                    fontWeight: 'bold',
                    marginLeft: 5,
                    marginTop: 5,
                  }}>
                  Otto
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    marginLeft: 235,
                    marginRight: 50,
                    fontSize: 26,
                    color: 'green',
                  }}>
                  4.4/5
                </Text>
              </View>
              <Text style={{ color: 'black', fontSize: 18, marginLeft: 5 }}>
                Cais do Sodré
              </Text>
              <View flexDirection="row">
                <Icon name="clock" size={20} style={{ marginLeft: 5 }} />
                <Text style={{ marginLeft: 5, fontSize: 16 }}>
                  Horário: 12h às 24h
                </Text>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50,
                    height: 50,
                    backgroundColor: 'purple',
                    borderRadius: 100,
                    marginLeft: 135,
                  }}>
                  <Icon name={'share-variant'} size={30} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={this.state.selectedButtonIndex}
                buttons={buttons}
                textStyle={{textAlign: 'center', fontSize: 18}}
                containerStyle={{height: 45}}
              />
              </View>
            {button} 
          </View>
       </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

