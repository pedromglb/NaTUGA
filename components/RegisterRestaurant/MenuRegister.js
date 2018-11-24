import React, { Component } from 'react';
import { Alert, ScrollView, Modal, Text, TouchableOpacity, View, StyleSheet, Dimensions, Slider, TextInput, CheckBox, KeyboardAvoidingView} from 'react-native'
import { FontAwesome, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, MaterialIcons, AntDesign, EvilIcons } from '@expo/vector-icons';

class MenuRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
        countEntradas: 2,
        countPratos: 2,
        countSobremesas: 2,
        countBebidas: 2,

    };
  }

    renderFields( number ) {
        var count;
        if( number == 1 )
          count  = this.state.countEntradas;
        else if( number == 2 )
          count  = this.state.countPratos;
        else if( number == 3 )
          count  = this.state.countSobremesas;
        else if( number == 4 )
          count  = this.state.countBebidas;
        
        const lines = [];
        for (let i=0; i <count; i++) {

            lines.push(
                <InputLineForm  />
            );
        }
        return lines;
    }



   render() {
 
      return (
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior= "padding"
        >
        <ScrollView>
        <View>
            <Text style = {{fontWeight: 'bold',
                            fontSize: 32,
                            marginTop: 25, color: '#ff7700',
                            textAlign: "center", fontStyle: "italic"}} >Menu Interativo</Text>

            <View style = {{ marginTop: 10 }}>
                <Text style = {styles.secondTitle} >Entradas:</Text>
                {this.renderFields(1)}
                <View style = {{ width: '15%'}}>
                  <TouchableOpacity onPress= {() => { this.setState({ countEntradas: this.state.countEntradas + 1 }) } }>
                      <MaterialIcons name="add-circle-outline" size={30} style={{ marginLeft: 15, marginTop: 5, color: '#ff7700'}} />
                  </TouchableOpacity> 
                </View>
            </View>

            <View style = {{ marginTop: 10 }}>
                <Text style = {styles.secondTitle} >Pratos:</Text>
                {this.renderFields(2)}
                <View style = {{ width: '15%'}}>
                  <TouchableOpacity onPress= {() => { this.setState({ countPratos: this.state.countPratos + 1 }) } }>
                      <MaterialIcons name="add-circle-outline" size={30} style={{ marginLeft: 15, marginTop: 5, color: '#ff7700'}} />
                  </TouchableOpacity>
                </View>
            </View>

            <View style = {{ marginTop: 10 }}>
                <Text style = {styles.secondTitle} >Sobremesas:</Text>
                {this.renderFields(3)}
                <View style = {{ width: '15%'}}>
                  <TouchableOpacity onPress= {() => { this.setState({ countSobremesas: this.state.countSobremesas + 1 }) } }>
                      <MaterialIcons name="add-circle-outline" size={30} style={{ marginLeft: 15, marginTop: 5, color: '#ff7700'}} />
                  </TouchableOpacity>
                </View>
            </View>

            <View style = {{ marginTop: 10 }}>
                <Text style = {styles.secondTitle} >Bebidas:</Text>
                {this.renderFields(4)}
                <View style = {{ width: '15%'}}>
                <TouchableOpacity onPress= {() => { this.setState({ countBebidas: this.state.countBebidas + 1 }) } }>
                    <MaterialIcons name="add-circle-outline" size={30} style={{ marginLeft: 15, marginTop: 5, color: '#ff7700'}} />
                </TouchableOpacity>
                </View>
            </View>

              
              <TouchableOpacity onPress= {() => {alert('Validar');}} 
                                style = {{  
                                         width: 150, height: 40, borderWidth: 2, 
                                        borderColor: '#BC5800', justifyContent: 'center',
                                        marginBottom: 20, marginLeft: 190, backgroundColor: '#ff7700'
                                        }} >
                            <Text style = {{ fontSize: 20, textAlign: 'center', color: 'white'}}> Validar </Text>
                     
              </TouchableOpacity>


              </View>
       
        </ScrollView>
        </KeyboardAvoidingView>
      )
   }
}
export default MenuRegister

function InputLineForm(props) {
    return (
     <View style = {{flexDirection: 'row', marginLeft: 15, marginTop: 5, marginRight: 10}}>
                <TextInput  style={styles.inputPlate} 
                            underlineColorAndroid = "transparent" />
                <TextInput  style={styles.inputPrice}  underlineColorAndroid = "transparent" 
                            keyboardType = 'numeric' 
                            maxLength = {3}  />
                <Text style = {styles.filterTextPriceTag} > € </Text>
      </View>
    );
}

const styles = StyleSheet.create ({
    secondTitle : {
        fontSize: 18,
        marginLeft: 15
    },
    filterTextPriceTag: {
        fontSize: 20,
        color: '#3f2949',
      },

      inputPrice: {
        fontSize: 14,
        backgroundColor: 'rgba(230,230,230,0.4)',
        width: '15%',
        paddingHorizontal: '2%',
        borderRadius: 5, 
        textAlign: 'center',
    },

    inputPlate: {
        fontSize: 14,
        flex: 1,
        backgroundColor: 'rgba(230,230,230,0.4)',
        width: '30%',
        paddingHorizontal: '2%',
        marginRight: 30,
        borderRadius: 5
    }
})