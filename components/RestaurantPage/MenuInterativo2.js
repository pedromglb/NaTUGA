import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button, Picker, TextInput, Alert} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconP from 'react-native-vector-icons/Ionicons';
import IconS from 'react-native-vector-icons/Entypo';

export default class MenuInterativo2 extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
        npessoas: 1,
        pickervalueEn1: 0 , pickervalueEn2: 0,
        pickervaluePrato1: 0 , pickervaluePrato2: 0,
        pickervalueSob1: 0 , pickervalueSob2: 0,
        pickervalueBeb1: 0 , pickervalueBeb2: 0,

    };
  }

   updatePickerEn1 = (pickervalueEn1) => {
      this.setState({ pickervalueEn1: pickervalueEn1 })
   }
    updatePickerEn2 = (pickervalueEn2) => {
      this.setState({ pickervalueEn2: pickervalueEn2 })
   }

   updatePickerPrato1 = (pickervaluePrato1) => {
      this.setState({ pickervaluePrato1: pickervaluePrato1 })
   }
    updatePickerPrato2 = (pickervaluePrato2) => {
      this.setState({ pickervaluePrato2: pickervaluePrato2 })
   }

   updatePickerSob1 = (pickervalueSob1) => {
      this.setState({ pickervalueSob1: pickervalueSob1 })
   }
    updatePickerSob2 = (pickervalueSob2) => {
      this.setState({ pickervalueSob2: pickervalueSob2 })
   }

    updatePickerBeb1 = (pickervalueBeb1) => {
      this.setState({ pickervalueBeb1: pickervalueBeb1 })
   }
    updatePickerBeb2 = (pickervalueBeb2) => {
      this.setState({ pickervalueBeb2: pickervalueBeb2 })
   }

  click = () => {alert(this.state.pickervalue)}

  render(){

    var pratoBox = (
      <View style= {{alignItems: 'center'}}>
        <Picker style = {{width: '90%'}}
                selectedValue = {this.state.pickervaluePrato1}
                onValueChange = {this.updatePickerPrato1}
         >
          <Picker.Item label= 'Selecione uma Opção' value = {0} />
          <Picker.Item label= 'Sashimi de Salmão 4p - 5.50€' value = {5.5} />
          <Picker.Item label = "Nigiri de Robalo 4p - 6.50€" value = {6.5} />
          <Picker.Item label = "Maki de Gambas Panadas 3p - 6.00€" value = {6} />
          <Picker.Item label = "Califórnia de Atum 3p - 6.00€" value = {6} />
          
        </Picker>

         <Picker style = {{width: '90%'}}
                selectedValue = {this.state.pickervaluePrato2}
                onValueChange = {this.updatePickerPrato2}
         >
          
          <Picker.Item label= 'Selecione uma Opção' value = {0} />
          <Picker.Item label= 'Sashimi de Salmão 4p - 5.50€' value = {5.5} />
          <Picker.Item label = "Nigiri de Robalo 4p - 6.50€" value = {6.5} />
          <Picker.Item label = "Maki de Gambas Panadas 3p - 6.00€" value = {6} />
          <Picker.Item label = "Califórnia de Atum 3p - 6.00€" value = {6} />
               
          
        </Picker>

      </View>

    );

    var sobremesaBox = (
      <View style= {{alignItems: 'center'}}>
        <Picker style = {{width: '90%'}}
                selectedValue = {this.state.pickervalueSob1}
                onValueChange = {this.updatePickerSob1}
         >
          <Picker.Item label= 'Selecione uma Opção' value = {0} />
          <Picker.Item label= 'Sago Doce Manga - 2.50€' value = {2.5} />
          <Picker.Item label = "Banana na Chapa - 3.50€" value = {3.5} />
          <Picker.Item label = "Gelado Chá Verde - 2.50€" value = {2.5} />
          <Picker.Item label = "Bolo Sésamo - 2.50€" value = {2.5} />
          
        </Picker>

         <Picker style = {{width: '90%'}}
                selectedValue = {this.state.pickervalueSob2}
                onValueChange = {this.updatePickerSob2}
         >
          <Picker.Item label= 'Selecione uma Opção' value = {0} />
          <Picker.Item label= 'Sago Doce Manga - 2.50€' value = {2.5} />
          <Picker.Item label = "Banana na Chapa - 3.50€" value = {3.5} />
          <Picker.Item label = "Gelado Chá Verde - 2.50€" value = {2.5} />
          <Picker.Item label = "Bolo Sésamo - 2.50€" value = {2.5} />
               
          
        </Picker>
       

      </View>

    );

    var bebidaBox = (
      <View style= {{alignItems: 'center'}}>
        <Picker style = {{width: '90%'}}
                selectedValue = {this.state.pickervalueBeb1}
                onValueChange = {this.updatePickerBeb1}
         >
          <Picker.Item label= 'Selecione uma Opção' value = {0} />
          <Picker.Item label= 'Sakerinha - 3.00€' value = {3} />
          <Picker.Item label = "Sake (quente ou frio) - 3.50€" value = {3.5} />
          <Picker.Item label = "Cerveja Japonesa - 2.90€" value = {2.9} />
          <Picker.Item label = "Calpis - 2.50€" value = {2.5} />
          
        </Picker>

         <Picker style = {{width: '90%'}}
                selectedValue = {this.state.pickervalueBeb2}
                onValueChange = {this.updatePickerBeb2}
         >
          <Picker.Item label= 'Selecione uma Opção' value = {0} />
          <Picker.Item label= 'Sakerinha - 3.00€' value = {3} />
          <Picker.Item label = "Sake (quente ou frio) - 3.50€" value = {3.5} />
          <Picker.Item label = "Cerveja Japonesa - 2.90€" value = {2.9} />
          <Picker.Item label = "Calpis - 2.50€" value = {2.5} />
               
          
        </Picker>
        
       

      </View>

    );

    var entradasBox = (
      <View style= {{alignItems: 'center'}}>
        <Picker style = {{width: '90%'}}
                selectedValue = {this.state.pickervalueEn1}
                onValueChange = {this.updatePickerEn1}
         >
          <Picker.Item label= 'Selecione uma Opção' value = {0} />
          <Picker.Item label= 'Sopa Omiso - 3.00€' value = {3} />
          <Picker.Item label = "Crepes Vegetais - 2.50€" value = {2.5} />
          <Picker.Item label = "Crepes Gambas - 3.50€€" value = {3.5} />
          <Picker.Item label = "Guiozes - 2.50€" value = {2.5} />
          
        </Picker>

         <Picker style = {{width: '90%'}}
                selectedValue = {this.state.pickervalueEn2}
                onValueChange = {this.updatePickerEn2}
         >
          <Picker.Item label= 'Selecione uma Opção' value = {0} />
          <Picker.Item label= 'Sopa Omiso - 3.00€' value = {3} />
          <Picker.Item label = "Crepes Vegetais - 2.50€" value = {2.5} />
          <Picker.Item label = "Crepes Gambas - 3.50€€" value = {3.5} />
          <Picker.Item label = "Guiozes - 2.50€" value = {2.5} />
               
          
        </Picker>
       

      </View>

    );

    
    var price = this.state.pickervalueEn1  + this.state.pickervalueEn2 + this.state.pickervaluePrato1 + this.state.pickervaluePrato2 + this.state.pickervalueSob1 + this.state.pickervalueSob2 + this.state.pickervalueBeb1 + this.state.pickervalueBeb2;
    
    return(
      
      
      <View style={{flex: 1}}>
       
        <View style={{flex:1, marginTop: 5, marginLeft: 10, flexDirection:'row'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}} > Número de Pessoas: </Text>
          <TextInput  style = {styles.pessoasInput}  underlineColorAndroid = "transparent" 
                      keyboardType = 'numeric' maxLength = {3} 
                      onChangeText = { (npessoas) => this.setState({npessoas}) } 
                      onSubmitEditing = {() => {Alert.alert("Número de Pessoas Indiponível", "Só é possível escolher a ementa para duas pessoas.")}}/> 

          
        </View>

        <View  style = {{ alignItems: 'center', marginTop: 15}}>
              <View style = {{flexDirection: 'row'}}>
                    <IconS name={'bowl'} size={45}/>
                    <Text style = {{fontWeight: 'bold', marginTop: 28}} >Entradas</Text>
              </View>
        </View>

        {entradasBox}

        <View  style = {{ alignItems: 'center', marginTop: 5}}>
              <View style = {{flexDirection: 'row'}}>
                    <IconP name={'ios-disc'} size={50}/>
                    <Text style = {{fontWeight: 'bold', marginTop: 28}} > Pratos</Text>
              </View>
        </View>

        {pratoBox}

        <View  style = {{ alignItems: 'center', marginTop: 5}}>
              <View style = {{flexDirection: 'row'}}>
                    <IconS name={'cake'} size={45}/>
                    <Text style = {{fontWeight: 'bold', marginTop: 29}} > Sobremesas</Text>
              </View>
        </View>

        {sobremesaBox}

        <View  style = {{ alignItems: 'center', marginTop: 5}}>
              <View style = {{flexDirection: 'row'}}>
                    <IconS name={'drink'} size={45}/>
                    <Text style = {{fontWeight: 'bold', marginTop: 29}} >Bebidas</Text>
              </View>
        </View>

        {bebidaBox}
        
        <View  style = {{ alignItems: 'center', marginTop: 5}}>
             <Text style = {styles.textfinalprice}>Preço: {price} €</Text>
        </View>
      
      </View> 
      
    );
  }
}


const styles = StyleSheet.create ({

    pessoasInput: {
    
        fontSize: 14,
        backgroundColor: 'rgba(230,230,230,0.4)',
        width: 50,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginHorizontal: 5,
        textAlign:"center"
        
    },

    textfinalprice: {fontSize: 18, fontWeight: 'bold', marginBottom: 30}

 
})