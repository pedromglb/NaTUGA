import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button, Picker, TextInput, Alert} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconP from 'react-native-vector-icons/Ionicons';
import IconS from 'react-native-vector-icons/Entypo';

export default class MenuInterativo extends React.Component {
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
          <Picker.Item label= 'Burrata con Pomodorini - 8.00€' value = {8} />
          <Picker.Item label = "Carpaccio di Vitello con Limone - 11.00€" value = {11} />
          <Picker.Item label = "Funghi in Camicia e Scaglie - 10.50€" value = {10.5} />
          <Picker.Item label = "Insalata di Pollo con Verdure - 10.50€" value = {10.5} />
          
        </Picker>

         <Picker style = {{width: '90%'}}
                selectedValue = {this.state.pickervaluePrato2}
                onValueChange = {this.updatePickerPrato2}
         >
          
          <Picker.Item label= 'Selecione uma Opção' value = {0} />
          <Picker.Item label= 'Burrata con Pomodorini - 8.00€' value = {8} />
          <Picker.Item label = "Carpaccio di Vitello con Limone - 11.00€" value = {11} />
          <Picker.Item label = "Funghi in Camicia e Scaglie - 10.50€" value = {10.5} />
          <Picker.Item label = "Insalata di Pollo con Verdure - 10.50€" value = {10.5} />
               
          
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
          <Picker.Item label= 'Tiramisú - 4.20€' value = {4.2} />
          <Picker.Item label = "Salame di Cioccolato - 3.50€" value = {3.5} />
          <Picker.Item label = "Moousse di Cioccolato - 4.00€" value = {4} />
          <Picker.Item label = "Cheesecake - 4.20€" value = {4.2} />
          
        </Picker>

         <Picker style = {{width: '90%'}}
                selectedValue = {this.state.pickervalueSob2}
                onValueChange = {this.updatePickerSob2}
         >
          <Picker.Item label= 'Selecione uma Opção' value = {0} />
          <Picker.Item label= 'Tiramisú - 4.20€' value = {4.2} />
          <Picker.Item label = "Salame di Cioccolato - 3.50€" value = {3.5} />
          <Picker.Item label = "Moousse di Cioccolato - 4.00€" value = {4} />
          <Picker.Item label = "Cheesecake - 4.20€" value = {4.2} />
               
          
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
          <Picker.Item label= 'Sangria 1L Branca - 13.00€' value = {13} />
          <Picker.Item label = "Sangria 1L Espumante - 15.00€" value = {15} />
          <Picker.Item label = "Limonate Manjericão - 3.00€" value = {3} />
          <Picker.Item label = "Acqua Vitalis 37,5cl. - 1.50€" value = {1.5} />
          
        </Picker>

         <Picker style = {{width: '90%'}}
                selectedValue = {this.state.pickervalueBeb2}
                onValueChange = {this.updatePickerBeb2}
         >
          <Picker.Item label= 'Selecione uma Opção' value = {0} />
          <Picker.Item label= 'Sangria 1L Branca - 13.00€' value = {13} />
          <Picker.Item label = "Sangria 1L Espumante - 15.00€" value = {15} />
          <Picker.Item label = "Limonate Manjericão - 3.00€" value = {3} />
          <Picker.Item label = "Acqua Vitalis 37,5cl. - 1.50€" value = {1.5} />
               
          
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
          <Picker.Item label= 'Grissinis - 2.00€' value = {2} />
          <Picker.Item label = "Azeitonas Marinadas - 2.50€" value = {2.5} />
          <Picker.Item label = "Crostine de Alho - 3.00€" value = {3} />
          <Picker.Item label = "Bruscheta - 2.50€" value = {2.5} />
          
        </Picker>

         <Picker style = {{width: '90%'}}
                selectedValue = {this.state.pickervalueEn2}
                onValueChange = {this.updatePickerEn2}
         >
          <Picker.Item label= 'Selecione uma Opção' value = {0} />
          <Picker.Item label= 'Grissinis - 2.00€' value = {2} />
          <Picker.Item label = "Azeitonas Marinadas - 2.50€" value = {2.5} />
          <Picker.Item label = "Crostine de Alho - 3.00€" value = {3} />
          <Picker.Item label = "Bruscheta - 2.50€" value = {2.5} />
               
          
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