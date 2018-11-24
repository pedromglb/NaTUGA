import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';


export default class Dice extends React.Component {

    render() {
        return (
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
                    <Image style={{width:'100%',height:'100%'}} source={require('../public/Dice3.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}  
