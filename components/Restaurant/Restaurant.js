import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView,Alert} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import NTHeader from '../NTHeader'
import RestaurantHeader from '../RestaurantHeader'
import Dice from '../Dice'

export default class Restaurant extends React.Component {

    static navigationOptions = {
        title: 'Restaurant Page',
        header: null
    };


    constructor(props) {
        super(props);
    
        this.state = {
          
        };
        this._onPressButton = this._onPressButton.bind(this);
      }

    _onPressButton() {
        alert("Não Disponivel");
      }

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={{flex:1}}>
                <NTHeader ></NTHeader>
                <ScrollView style={{}}>
                <TouchableOpacity onPress={() => navigate('InfoPage2')} activeOpacity={0.9} style={{width:'100%',height: 200,borderBottomWidth:3}}>
                    <Image
                        style={{flex:1,height:undefined,width:undefined}}
                        source={require('../../public/SushiCome.jpeg')}
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
                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigate('InfoPage')}style={{width:'100%',height: 200,borderBottomWidth:3}}>
                        <Image
                            style={{flex:1,height:undefined,width:undefined}}
                            source={require('../RestaurantPage/otto.png')}
                        />
                        <View
                            style={{backgroundColor: 'rgba(0,0,0,0.4)',width:'100%',position:'absolute',paddingHorizontal:3,paddingVertical:3}}>
                            <Text style={{color:'white',fontSize: 20}}>
                                Otto
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
                                        Lisboa
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
                                        12h às 1h
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Alert.alert('Página Restaurante','Não Disponivel');}} activeOpacity={0.9} style={{width:'100%',height: 200,borderBottomWidth:3}}>
                        <Image
                            style={{flex:1,height:undefined,width:undefined}}
                            source={require('../../public/OMiguel.jpeg')}
                        />
                        <View
                            style={{backgroundColor: 'rgba(0,0,0,0.4)',width:'100%',position:'absolute',paddingHorizontal:3,paddingVertical:3}}>
                            <Text style={{color:'white',fontSize: 20}}>
                                O Miguel
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
                                        Setúbal
                                        </Text>
                                    </View>
                                    <View style={{flex:1,flexDirection: 'row'}}>
                                        <Icon
                                                style={{}}
                                                name='euro' 
                                                color='white'
                                        />
                                        <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                        13/pessoa
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
                    <TouchableOpacity onPress={()=>{Alert.alert('Página Restaurante','Não Disponivel');}} activeOpacity={0.9} style={{width:'100%',height: 200,borderBottomWidth:3}}>
                        <Image
                            style={{flex:1,height:undefined,width:undefined}}
                            source={require('../../public/Feitoria.jpeg')}
                        />
                        <View
                            style={{backgroundColor: 'rgba(0,0,0,0.4)',width:'100%',position:'absolute',paddingHorizontal:3,paddingVertical:3}}>
                            <Text style={{color:'white',fontSize: 20}}>
                                Feitoria
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
                                        Lisboa
                                        </Text>
                                    </View>
                                    <View style={{flex:1,flexDirection: 'row'}}>
                                        <Icon
                                                style={{}}
                                                name='euro' 
                                                color='white'
                                        />
                                        <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                        110/pessoa
                                        </Text>
                                    </View>
                                    <View style={{flex:1,flexDirection: 'row'}}>
                                        <Icon
                                            name='clock-o' 
                                            color='white'
                                        />
                                        <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                        19h às 23h
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                {/* Dice button */}
                <View style={{position:'absolute',bottom:'3%',left:'3%'}}>
                    <TouchableOpacity
                        onPress={() => navigate('RestaurantsPage2')}
                        style={{
                            borderWidth:1,
                            borderColor:'rgba(0,0,0,0.4)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:70,
                            height:70,
                            backgroundColor:'rgb(60, 60, 60)',
                            borderRadius:100,
                            }}
                    >
                        <Image style={{width:'100%',height:'100%'}} source={require('../../public/Dice3.png')}/>
                    </TouchableOpacity>
                </View>
            </View>   
        );
    }
}
