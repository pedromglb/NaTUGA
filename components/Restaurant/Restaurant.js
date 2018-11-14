import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Restaurant extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
    
        this._onPressButton = this._onPressButton.bind(this);
      }

    _onPressButton() {
        alert("clicked");
      }

      /* multiplos restaurantes apenas para teste e o dado no fim */

    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView style={{}}>
                    <View style={{borderBottomWidth:1}}>
                        {/*restaurant*/}
                        <TouchableOpacity style={{widht:'100%',height: 200,borderBottomWidth:3}}>
                            <Image
                                style={{flex:1}}
                                source={require('../../public/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg')}
                            />
                            <View
                                style={{backgroundColor: 'rgba(0,0,0,0.4)',width:'100%',position:'absolute',paddingHorizontal:3,paddingVertical:3}}
                            >
                                <Text style={{color:'white',fontSize: 20}}>
                                    Sushi Tempura
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
                                            Porto
                                            </Text>
                                        </View>
                                        <View style={{flex:1,flexDirection: 'row'}}>
                                            <Icon
                                                    style={{}}
                                                    name='euro' 
                                                    color='white'
                                            />
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            30/pessoa
                                            </Text>
                                        </View>
                                        <View style={{flex:1,flexDirection: 'row'}}>
                                            <Icon
                                                name='clock-o' 
                                                color='white'
                                            />
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            20h às 23h
                                            </Text>
                                        </View>
                                        
                                    </View>
                                    {/*<View style={{flexDirection: 'row'}}>
                                        <View style={{flexDirection: 'column',alignItems: 'center'}}>
                                            <Icon
                                                    style={{}}
                                                    name='euro' 
                                                    color='white'
                                            />
                                            <Icon
                                                name='clock-o' 
                                                color='white'
                                            />
                                            <Icon
                                                name='map-marker' 
                                                color='white'
                                            />
                                        </View>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            30/pessoa
                                            </Text>
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            20h às 23h
                                            </Text>
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            Porto
                                            </Text>
                                        </View>
                                    </View>*/}
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/*End restaurant*/}

                        <TouchableOpacity style={{widht:'100%',height: 200,borderBottomWidth:3}}>
                            <Image
                                style={{flex:1}}
                                source={require('../../public/bananas.jpg')}
                            />
                            <View
                                style={{backgroundColor: 'rgba(0,0,0,0.4)',width:'100%',position:'absolute',paddingHorizontal:3,paddingVertical:3}}>
                                <Text style={{color:'white',fontSize: 20}}>
                                    Bananas Place
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
                                            10/pessoa
                                            </Text>
                                        </View>
                                        <View style={{flex:1,flexDirection: 'row'}}>
                                            <Icon
                                                name='clock-o' 
                                                color='white'
                                            />
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            10h às 23h
                                            </Text>
                                        </View>
                                        
                                    </View>
                                    {/*<View style={{flexDirection: 'row'}}>
                                        <View style={{flexDirection: 'column',alignItems: 'center'}}>
                                            <Icon
                                                    style={{}}
                                                    name='euro' 
                                                    color='white'
                                            />
                                            <Icon
                                                name='clock-o' 
                                                color='white'
                                            />
                                            <Icon
                                                name='map-marker' 
                                                color='white'
                                            />
                                        </View>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            10/pessoa
                                            </Text>
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            10h às 23h
                                            </Text>
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            Almada
                                            </Text>
                                        </View>
                                    </View>*/}
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{widht:'100%',height: 200,borderBottomWidth:3}}>
                            <Image
                                style={{flex:1}}
                                source={require('../../public/pudins.jpg')}
                            />
                            <View
                                style={{backgroundColor: 'rgba(0,0,0,0.4)',width:'100%',position:'absolute',paddingHorizontal:3,paddingVertical:3}}>
                                <Text style={{color:'white',fontSize: 20}}>
                                    Sitio dos pudins
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
                                            17h às 23h
                                            </Text>
                                        </View>
                                        
                                    </View>


                                    {/*<View style={{flexDirection: 'row'}}>
                                        <View style={{flexDirection: 'column',alignItems: 'center'}}>
                                            <Icon
                                                    style={{}}
                                                    name='euro' 
                                                    color='white'
                                            />
                                            <Icon
                                                name='clock-o' 
                                                color='white'
                                            />
                                            <Icon
                                                name='map-marker' 
                                                color='white'
                                            />
                                        </View>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            15/pessoa
                                            </Text>
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            17h às 23h
                                            </Text>
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            Lisboa
                                            </Text>
                                        </View>
                                    </View>*/}
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{widht:'100%',height: 200,borderBottomWidth:3}}>
                            <Image
                                style={{flex:1}}
                                source={require('../../public/pudins.jpg')}
                            />
                            <View
                                style={{backgroundColor: 'rgba(0,0,0,0.4)',width:'100%',position:'absolute',paddingHorizontal:3,paddingVertical:3}}>
                                <Text style={{color:'white',fontSize: 20}}>
                                    Sushi Tempura
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
                                            Porto
                                            </Text>
                                        </View>
                                        <View style={{flex:1,flexDirection: 'row'}}>
                                            <Icon
                                                    style={{}}
                                                    name='euro' 
                                                    color='white'
                                            />
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            30/pessoa
                                            </Text>
                                        </View>
                                        <View style={{flex:1,flexDirection: 'row'}}>
                                            <Icon
                                                name='clock-o' 
                                                color='white'
                                            />
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            20h às 23h
                                            </Text>
                                        </View>
                                        
                                    </View>
                                    {/*<View style={{flexDirection: 'row'}}>
                                        <View style={{flexDirection: 'column',alignItems: 'center'}}>
                                            <Icon
                                                    style={{}}
                                                    name='euro' 
                                                    color='white'
                                            />
                                            <Icon
                                                name='clock-o' 
                                                color='white'
                                            />
                                            <Icon
                                                name='map-marker' 
                                                color='white'
                                            />
                                        </View>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            30/pessoa
                                            </Text>
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            20h às 23h
                                            </Text>
                                            <Text style={{color:'white',fontSize: 10,marginLeft:5}}>
                                            Porto
                                            </Text>
                                        </View>
                                    </View>*/}
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                {/* Dice button */}
                <View style={{position:'absolute',bottom:'3%',left:'3%'}}>
                    <TouchableOpacity
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