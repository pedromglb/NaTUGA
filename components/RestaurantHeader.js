import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class RestaurantHeader extends React.Component {

  constructor(props) {
      super(props);
    
      this.state = {
          
      };
    
      this._onPressButton = this._onPressButton.bind(this);
    }

    _onPressButton() {
      alert("clicked");
    }
    render() {
      return (
          <TouchableOpacity activeOpacity={0.9} style={{widht:'100%',height: 200,borderBottomWidth:3}}>
            <Image
                style={{flex:1,height:undefined,width:undefined}}
                source={require('../public/SushiCome.jpeg')}
            />
            <View
                style={{backgroundColor: 'rgba(0,0,0,0.4)',width:'100%',position:'absolute',paddingHorizontal:3,paddingVertical:3}}
            >
                <Text style={{color:'white',fontSize: 20}}>
                    SushiCome
                </Text>
            </View>
            <View
                style={{backgroundColor: 'rgba(0,0,0,0.4)',width:'100%',position:'absolute',bottom:0,right:0,paddingHorizontal:3,paddingVertical:3}}>
                <View style={{left:'7%'}}>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <View style={{flex:1,flexDirection: 'row'}}>
                            <Icon
                                name='map-marker' 
                                color='white'
                            />
                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                            Almada
                            </Text>
                        </View>
                        <View style={{flex:1,flexDirection: 'row'}}>
                            <Icon
                                    style={{}}
                                    name='euro' 
                                    color='white'
                            />
                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                            15/pessoa
                            </Text>
                        </View>
                        <View style={{flex:1,flexDirection: 'row'}}>
                            <Icon
                                name='clock-o' 
                                color='white'
                            />
                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                            12h às 23h
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
      );
    }
}