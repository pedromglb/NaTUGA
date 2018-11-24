import React, { Component } from 'react';
import { Alert, ScrollView, Modal, Text, TouchableOpacity, View, StyleSheet, Dimensions, Slider, TextInput, CheckBox} from 'react-native'
import { FontAwesome, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, MaterialIcons, AntDesign, EvilIcons, Feather } from '@expo/vector-icons';

class RegisterEstabelecimentoSeguinte extends Component {

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
        <ScrollView>
        <View>
            <Text style = {{fontWeight: 'bold',
                            fontSize: 30,
                            marginTop: 25, color: '#ff7700',
                            textAlign: "center", fontStyle: "italic",
                            }} >Registar Estabelecimento</Text>

            <View style = {{ marginTop: 3 }}>
                <Text style = {styles.secondTitle} >Fotos:</Text>
            </View>

            <View style = {{flexDirection: 'row'}} >

                   <TouchableOpacity onPress= {() => {Alert.alert('Adicionar Fotos da Comida','Não está disponivel');}}  style = { styles.viewFoto  } >
                        < SimpleLineIcons name="camera" size={50} style = {{}}/>
                        < Text >Comida</ Text>
                  
                  </TouchableOpacity>  
                  

                  <TouchableOpacity onPress= {() => {Alert.alert('Adicionar Fotos do Ambiente','Não está disponivel');}}  style = { styles.viewFoto  } >
                        < SimpleLineIcons name="camera" size={50} style = {{}}/>
                        < Text >Ambiente</ Text>
                  </TouchableOpacity>  

                   <TouchableOpacity onPress= {() => {Alert.alert('Adicionar Outras Fotos','Não está disponivel');}}  style = { styles.viewFoto  } >
                        < Feather name="plus" size={50} style = {{}}/>
           
                  </TouchableOpacity>  
            </View>

            <View style = {{ marginTop: 10 }}>
                <Text style = {styles.secondTitle} >Fotos Menu:</Text>
            </View>

            <View style = {{flexDirection: 'row'}} >
                  <TouchableOpacity onPress= {() => {Alert.alert('Adicionar Fotos do Menu','Não está disponivel');}}  style = { styles.viewFoto  } >
                        < SimpleLineIcons name="camera" size={50} style = {{}}/>
                  </TouchableOpacity>   

                  <TouchableOpacity onPress= {() => {Alert.alert('Adicionar Mais Fotos','Não está disponivel');}}  style = { styles.viewFoto  } >
                        < Feather name="plus" size={50} style = {{}}/>
                  </TouchableOpacity>   
   
            </View>

              <TouchableOpacity onPress= {() => navigate('Register3')} 
                                style = {{ flex: 1, width: '90%', height: 40, borderWidth: 2, 
                                        borderColor: 'black', justifyContent: 'center', backgroundColor: '#686868',
                                        marginLeft: 15, marginTop: 30 }}>
                            <Text style = {{ fontSize: 20, textAlign: 'center', color: 'white'}}> Adicionar Menu Interativo </Text>
              </TouchableOpacity>          

              <TouchableOpacity onPress= {() => {navigate('RestaurantsPage');Alert.alert('Registo Restaurante','Iremos analisar o seu pedido de registo, mais tarde irá receber um email de confirmação');}} 
                     style = {{width: 150, height: 40, borderWidth: 2, 
                                        borderColor: '#BC5800', justifyContent: 'center', backgroundColor: '#ff7700',
                                        marginBottom: 20, marginLeft: 190, marginTop: 20,  }} >

   
                            <Text style = {{ fontSize: 20, textAlign: 'center', color: 'white'}}> Validar </Text>
               
         
              </TouchableOpacity>
        </View>
        </ScrollView>
      )
   }
}
export default RegisterEstabelecimentoSeguinte

const styles = StyleSheet.create ({
    secondTitle : {
        fontSize: 18,
        marginLeft: 15
    },


    viewFoto: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems:'center',
        height: 150,
        width: 95,
        marginLeft: 15,
        marginTop: 10
    }

 
})