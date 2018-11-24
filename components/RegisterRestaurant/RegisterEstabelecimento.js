import React, { Component } from 'react';
import { Alert, ScrollView, Modal, Text, TouchableOpacity, View, StyleSheet, Dimensions, Slider, TextInput, CheckBox, KeyboardAvoidingView } from 'react-native'
import { FontAwesome, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, MaterialIcons, AntDesign, EvilIcons } from '@expo/vector-icons';

class RegisterEstabelecimento extends Component {

    static navigationOptions = {
        title: 'Registar Estabelecimento',
        headerStyle: {
          backgroundColor: '#FF7700',
        }
      };  

  constructor(props) {
    super(props);

    this.state = {
      

    };
  }

   

   render() {
 
    const {navigate} = this.props.navigation;

      return (
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior= "padding"
        >
        <ScrollView>
        <View>
            <Text style = {{fontWeight: 'bold',
                            fontSize: 30,
                            marginTop: 25, color: '#ff7700',
                            textAlign: "center", fontStyle: "italic" }} >Registar Estabelecimento</Text>

            <View style = {{ marginTop: 10 }}>
                <Text style = {styles.secondTitle} >Nome <Text style = {{color: 'red'}} >*</Text> :</Text>
                <TextInput  style = {styles.largeInput}  underlineColorAndroid = "transparent" /> 
            </View>

            <View style = {{flexDirection: "row"}}>
                  <View style = {{ marginTop: 10 }}>
                      <Text style = {styles.secondTitle} >NIF <Text style = {{color: 'red'}} >*</Text> :</Text>
                      <TextInput  style = {styles.mediumInput} keyboardType = 'numeric'
                                    underlineColorAndroid = "transparent"  /> 
                  </View>

                  <View style = {{ marginTop: 10 }}>
                      <Text style = {styles.secondTitle} >Telemóvel:</Text>
                      <TextInput  style = {styles.mediumInput} keyboardType = 'numeric'
                                    underlineColorAndroid = "transparent"  /> 
                  </View>
            </View>

            <View style = {{ marginTop: 10 }}>
                <Text style = {styles.secondTitle} >Morada:</Text>
                <TextInput  style = {styles.largeInput} underlineColorAndroid = "transparent" /> 
            </View>

            <View style = {{flexDirection: "row"}}>
                  <View style = {{ marginTop: 10 }}>
                      <Text style = {styles.secondTitle} >Código-Postal <Text style = {{color: 'red'}} >*</Text> :</Text>
                      <TextInput  style = {styles.mediumInput}  keyboardType = 'numeric'
                                  underlineColorAndroid = "transparent" /> 
                  </View>

                  <View style = {{ marginTop: 10 }}>
                      <Text style = {styles.secondTitle} >Localidade <Text style = {{color: 'red'}} >*</Text> :</Text>
                      <TextInput  style = {styles.mediumInput}  underlineColorAndroid = "transparent" /> 
                  </View>
            </View>
          

            <View style = {{ marginTop: 10 }}>
                      <Text style = {styles.secondTitle} >Upload do Comprovativo <Text style = {{color: 'red'}} >*</Text> :</Text>
                      <TextInput  style = {styles.medium2Input}  underlineColorAndroid = "transparent" /> 
            </View>


              <TouchableOpacity onPress= {() => navigate('Register2')} >

                        <View style = {{width: 150, height: 40, borderWidth: 2, 
                                        borderColor: '#BC5800', justifyContent: 'center', backgroundColor: '#ff7700',
                                        marginBottom: 20, marginLeft: 190, marginTop: 30 }} >
                            <Text style = {{ fontSize: 20, textAlign: 'center', color: 'white'}}> Validar </Text>
                        </View>
         
              </TouchableOpacity>
        </View>
        </ScrollView>

        </KeyboardAvoidingView>
      )
   }
}
export default RegisterEstabelecimento

const styles = StyleSheet.create ({
    secondTitle : {
        fontSize: 18,
        marginLeft: 15
    },

    largeInput: {
        flex: 1,
        fontSize: 14,
        backgroundColor: 'rgba(230,230,230,0.4)',
        borderRadius: 5,
        paddingHorizontal: 5,
        marginTop: 10,
        marginHorizontal: 15
    },

    mediumInput: {
        flex: 1,
        fontSize: 14,
        backgroundColor: 'rgba(230,230,230,0.4)',
        width: 150,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 15
    },

    medium2Input: {
        flex: 1,
        fontSize: 14,
        backgroundColor: 'rgba(230,230,230,0.4)',
        width: 200,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 15
    },

 
})