import * as React from 'react';
import { Alert, Button, StyleSheet, Image, View, Text, TouchableOpacity,
         DrawerLayoutAndroid,  Dimensions, Slider, TextInput, CheckBox, Modal, StatusBar } from 'react-native';
import Smallicon from './Smallicon';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons, MaterialCommunityIcons, MaterialIcons, EvilIcons } from '@expo/vector-icons';


export default class NTHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOnSearch: false,  modalVisible: false,
            modalFilterVisible: false,
            modalFilterVisibleCozinha: false,
            modalFilterVisibleEstabelecimento: false,
            check1: false, check2: false, check3: false, check4: false, check5: false,
            check6: false, check7: false, check8: false, check9: false, check10: false,
            check11: false, check12: false, check13: false, check14: false, check15: false,
            check16: false, check17: false, check18: false
        };

        this._onPressButton = this._onPressButton.bind(this);
        this._onPressSearch = this._onPressSearch.bind(this);
        this._onPressUser = this._onPressUser.bind(this);           
        this._onPressEstabelecimentos = this._onPressEstabelecimentos.bind(this);
  }

   setModalVisible(visible) {
      this.setState({ modalVisible: visible });
   }

   setModalFilterVisible(visible) {
      this.setState({ modalFilterVisible: visible });
   }

   setModalFilterVisibleCozinha(visible) {
      this.setState({ modalFilterVisibleCozinha: visible });
   }

  setModalFilterVisibleEstabelecimento(visible) {
      this.setState({ modalFilterVisibleEstabelecimento: visible });
   }


  checkBoxValue(order){
      if(order == 1){  this.setState({ check1:!this.state.check1 })}
      if(order == 2){  this.setState({ check2:!this.state.check2 })}
      if(order == 3){  this.setState({ check3:!this.state.check3 })}
      if(order == 4){  this.setState({ check4:!this.state.check4 })}
      if(order == 5){  this.setState({ check5:!this.state.check5 })}
      if(order == 6){  this.setState({ check6:!this.state.check6 })}
      if(order == 7){  this.setState({ check7:!this.state.check7 })}
      if(order == 8){  this.setState({ check8:!this.state.check8 })}
      if(order == 9){  this.setState({ check9:!this.state.check9 })}
      if(order == 10){  this.setState({ check10:!this.state.check10 })}
      if(order == 11){  this.setState({ check11:!this.state.check11 })}
      if(order == 12){  this.setState({ check12:!this.state.check12 })}
      if(order == 13){  this.setState({ check13:!this.state.check13 })}
      if(order == 14){  this.setState({ check14:!this.state.check14 })}
      if(order == 15){  this.setState({ check15:!this.state.check15 })}
      if(order == 16){  this.setState({ check16:!this.state.check16 })}
      if(order == 17){  this.setState({ check17:!this.state.check17 })}
      if(order == 18){  this.setState({ check18:!this.state.check18 })}
  }
    


  _onPressEstabelecimentos() {
            Alert.alert(
          'Registar Estabelecimento',
          'My Alert Msg',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
  }


    _onPressUser() {
        alert('press');
    }

    setSearchVisible(visible) {
      this.setState({ isOnSearch: visible });
   }
   
    _onPressSearch() {
  
       this.setSearchVisible(!this.state.isOnSearch);
    }
    _onPressButton() {
 
        this.setState({ isOnSearch: false });
             this.setModalFilterVisible(true);
        
    }

    render() {

         
      var screen = Dimensions.get('window'); 

      var modalFiltros = (
             <Modal transparent = {true}
               position = 'center'
               animationType="fade"
               visible = {this.state.modalFilterVisible}
               onRequestClose={() => {this.setModalFilterVisible(false)}}  
               onClosed = {() => {alert('Modal close');}} 
               
            >
  
               <View style = {{
                    width: screen.width-50, 
                    height: screen.height-80,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    marginTop: 55,
                    borderWidth: 1,
                    borderColor: '#a6a6a6'
               }}>

                  <View style= {{ 
                      borderColor: '#a6a6a6', width: screen.width-50,
                      borderStyle: 'solid',
                      borderBottomWidth: 1,
                      position:'absolute',bottom:'90%'
                   
                   }}>
                      <Text style = {styles.filterTextTitle}> Filtros: </Text>
                  </View>

                   <TouchableOpacity onPress = {() => { this.setModalFilterVisibleCozinha(true );
                                                        this.setModalFilterVisible(false)} }
                      style = {{ 
                          borderColor: '#a6a6a6', width: screen.width-50,
                          borderStyle: 'solid',
                          borderBottomWidth: 1,
                          position:'absolute', bottom:'83%',
                          paddingVertical: 5,
                        
                    }}>

                      <View  style={{flexDirection: 'row'}}>

                          <Text style = {styles.filterText}> Tipo de Cozinha </Text>
                          <Ionicons name="ios-arrow-forward" size={20} style= {{top:'1.5%', marginLeft: 100, color:'#ff7700' }} />

                      </View>

                  </TouchableOpacity>
                  
                   <TouchableOpacity onPress = {() => { this.setModalFilterVisibleEstabelecimento(true );
                                                        this.setModalFilterVisible(false)} }
                      style = {{ 
                          borderColor: '#a6a6a6', width: screen.width-50,
                          borderStyle: 'solid',
                          borderBottomWidth: 1,
                          position:'absolute', bottom:'76%',
                          paddingVertical: 5,
                        
                    }}>

                      <View  style={{flexDirection: 'row'}}>

                          <Text style = {styles.filterText}> Tipo de Estabelecimento </Text>
                          <Ionicons name="ios-arrow-forward" size={20} 
                                    style= {{top:'1.5%', marginLeft: 23, color:'#ff7700' }} />

                      </View>

                  </TouchableOpacity>

                  <View style= {{ 
                      borderColor: '#a6a6a6', width: screen.width-50,
                      borderStyle: 'solid',
                      borderBottomWidth: 1,
                      position:'absolute',bottom:'56%', paddingBottom: 10
                   
                   }}>
                      <Text style = {styles.filterTextAval}> Avaliação: </Text>
                      
                            <Slider
                                  maximumValue = {5}
                                  minimumTrackTintColor = '#ff7700'
                                  minimumValue = {1}
                                  step = {1}
                                  value = {4}
                                  thumbTintColor = '#ff7700'
                            />  
                          <View style = {{flexDirection: 'row'}}>
                              <Text style = {{marginLeft: 10,
                                              color: '#3f2949',
                                              fontWeight: 'bold'} }> 1 </Text>
                              <Text style = {styles.sliderText }> 2 </Text>
                              <Text style = {styles.sliderText }> 3 </Text>
                              <Text style = {styles.sliderText }> 4 </Text>
                              <Text style = {styles.sliderText }> 5 </Text>
                          </View>
                      
                  </View>

                  <View style= {{ 
                      borderColor: '#a6a6a6', width: screen.width-50,
                      borderStyle: 'solid',
                      borderBottomWidth: 1,
                      position:'absolute',bottom:'40%', paddingBottom: 10
                   
                   }}>
                      <Text style = {styles.filterText}> Preço: </Text>

                          <View style = {{flexDirection: 'row', paddingTop: 10}}>
                            <Text style = {styles.filterTextPrice} > Min: </Text>
                            <TextInput
                                style={styles.inputPrice}
                                placeholderTextColor='rgba(0,0,0,1)'
                            />
                            <Text style = {styles.filterTextPriceTag} > € </Text>
                             <Text style = {styles.filterTextPrice} > Max: </Text>
                            <TextInput
                                style={styles.inputPrice}
                                placeholderTextColor='rgba(0,0,0,1)'
                            />
                            <Text style = {styles.filterTextPriceTag} > € </Text>
                          </View>
                      
                  </View>

                   <View style= {{ 
                      borderColor: '#a6a6a6', width: screen.width-50,
                      borderStyle: 'solid',
                      borderBottomWidth: 1,
                      position:'absolute',bottom:'24%', paddingBottom: 10
                   
                   }}>
                      <Text style = {styles.filterText}> Localização: </Text>

                          <View style = {{flexDirection: 'row', paddingTop: 10}}>
                            <EvilIcons name="location" size = {25} 
                                    style= {{top:'1.5%', marginLeft: 10 }} />

                            <TextInput
                                style={styles.inputLocation}
                                placeholderTextColor='rgba(0,0,0,1)'
                            />

                          </View>
                      
                  </View>

                  <TouchableOpacity onPress = {() => {
                     this.setModalFilterVisible(!this.state.modalFilterVisible)}}
                     style = {{ 
                          borderColor: '#a6a6a6', width: screen.width-50,
                          borderStyle: 'solid',
                          borderTopWidth: 1,
                          position:'absolute', bottom:'2%',
                     }}>

                        <Text style = {styles.filterTextBottom}> Aplicar </Text>

                  </TouchableOpacity>
               </View>

            </Modal>
      );

      var modalFiltrosCozinha = (
             <Modal transparent = {true}
               position = 'center'
               animationType="fade"
               visible = {this.state.modalFilterVisibleCozinha}
               onRequestClose={() => {this.setModalFilterVisibleCozinha(false)}}  
               onClosed = {() => {alert('Modal close');}} 
               
            >
  
               <View style = {{
                    width: screen.width-50, 
                    height: screen.height-80,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    marginTop: 55,
                    borderWidth: 1,
                    borderColor: '#a6a6a6'
               }}>

                  <View style= {{ 
                      borderColor: '#a6a6a6', width: screen.width-50,
                      borderStyle: 'solid',
                      borderBottomWidth: 1,
                      position:'absolute',bottom:'90%'
                   
                   }}>
                      <Text style = {styles.filterTextTitle}> Tipo de Cozinha: </Text>
                  </View>
  
                  <View style= {{ flexDirection: 'column', marginLeft: 10, bottom: '10%'}}>

                    <View style= {{ flexDirection: 'row'}}>
                      <CheckBox value = {this.state.check1} onChange = {() => this.checkBoxValue(1)}/>
                      <Text  style = {styles.checkBoxFilter } >Africana</Text>
                    </View>
                    <View style= {{ flexDirection: 'row'}}>
                      <CheckBox value = {this.state.check2} onChange = {() => this.checkBoxValue(2)}/>
                      <Text  style = {styles.checkBoxFilter } >Alentejana</Text>
                    </View>
                    <View style= {{ flexDirection: 'row'}}>
                      <CheckBox value = {this.state.check3} onChange = {() => this.checkBoxValue(3)}/>
                      <Text  style = {styles.checkBoxFilter } >Brasileira</Text>
                    </View>
                    <View style= {{ flexDirection: 'row'}}>
                      <CheckBox value = {this.state.check4} onChange = {() => this.checkBoxValue(4)}/>
                      <Text  style = {styles.checkBoxFilter } >Chinesa</Text>
                    </View>
                    <View style= {{ flexDirection: 'row'}}>
                      <CheckBox value = {this.state.check5} onChange = {() => this.checkBoxValue(5)}/>
                      <Text  style = {styles.checkBoxFilter } >Grelhados</Text>
                    </View>
                    <View style= {{ flexDirection: 'row'}}>
                      <CheckBox value = {this.state.check6} onChange = {() => this.checkBoxValue(6)}/>
                      <Text style = {styles.checkBoxFilter } >Hamburgueria</Text>
                    </View>
                    <View style= {{ flexDirection: 'row'}}>
                      <CheckBox value = {this.state.check7} onChange = {() => this.checkBoxValue(7)}/>
                      <Text  style = {styles.checkBoxFilter } >Italiana</Text>
                    </View>
                    <View style= {{ flexDirection: 'row'}}>
                      <CheckBox value = {this.state.check8} onChange = {() => this.checkBoxValue(8)}/>
                      <Text style = {styles.checkBoxFilter } >Japonesa</Text>
                    </View>
                    <View style= {{ flexDirection: 'row'}}>
                      <CheckBox value = {this.state.check9} onChange = {() => this.checkBoxValue(9)}/>
                      <Text  style = {styles.checkBoxFilter } >Portuguesa</Text>
                    </View>
                    <View style= {{ flexDirection: 'row'}}>
                      <CheckBox value = {this.state.check10} onChange = {() => this.checkBoxValue(10)}/>
                      <Text style = {styles.checkBoxFilter }>Russa</Text>
                    </View>

                  </View>

                  <TouchableOpacity onPress = {() => {
                     this.setModalFilterVisible(true)
                     this.setModalFilterVisibleCozinha(false)}}
                     style = {{ 
                          borderColor: '#a6a6a6', width: screen.width-50,
                          borderStyle: 'solid',
                          borderTopWidth: 1,
                          position:'absolute', bottom:'2%',
                     }}>

                        <Text style = {styles.filterTextBottom}> Aplicar </Text>

                  </TouchableOpacity>
                  
               </View>

            </Modal>
      );

       var modalFiltrosEstabelecimento = (
             <Modal transparent = {true}
               position = 'center'
               animationType="fade"
               visible = {this.state.modalFilterVisibleEstabelecimento}
               onRequestClose={() => {this.setModalFilterVisibleEstabelecimento(false)}}  
               onClosed = {() => {alert('Modal close');}} 
               
            >
  
               <View style = {{
                    width: screen.width-50, 
                    height: screen.height-80,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    marginTop: 55,
                    borderWidth: 1,
                    borderColor: '#a6a6a6'
               }}>

                  <View style= {{ 
                      borderColor: '#a6a6a6', width: screen.width-50,
                      borderStyle: 'solid',
                      borderBottomWidth: 1,
                      position:'absolute',bottom:'90%'
                   
                   }}>
                      <Text style = {styles.filterTextTitle}> Tipo de Estabelecimento: </Text>
                  </View>

                   <View style= {{ flexDirection: 'column', marginLeft: 10, bottom: '20%'}}>

                        <View style= {{ flexDirection: 'row'}}>
                          <CheckBox value = {this.state.check11} onChange = {() => this.checkBoxValue(11)}/>
                          <Text  style = {styles.checkBoxFilter } >Restaurante</Text>
                        </View>
                        <View style= {{ flexDirection: 'row'}}>
                          <CheckBox value = {this.state.check12} onChange = {() => this.checkBoxValue(12)}/>
                          <Text  style = {styles.checkBoxFilter } >Snack Bar</Text>
                        </View>
                        <View style= {{ flexDirection: 'row'}}>
                          <CheckBox value = {this.state.check13} onChange = {() => this.checkBoxValue(13)}/>
                          <Text  style = {styles.checkBoxFilter } >Pastelaria</Text>
                        </View>
                        <View style= {{ flexDirection: 'row'}}>
                          <CheckBox value = {this.state.check14} onChange = {() => this.checkBoxValue(14)}/>
                          <Text  style = {styles.checkBoxFilter } >Café</Text>
                        </View>
                        <View style= {{ flexDirection: 'row'}}>
                          <CheckBox value = {this.state.check15} onChange = {() => this.checkBoxValue(15)}/>
                          <Text  style = {styles.checkBoxFilter } >Bar</Text>
                        </View>
                        <View style= {{ flexDirection: 'row'}}>
                          <CheckBox value = {this.state.check16} onChange = {() => this.checkBoxValue(16)}/>
                          <Text style = {styles.checkBoxFilter } >Quiosque</Text>
                        </View>
                        <View style= {{ flexDirection: 'row'}}>
                          <CheckBox value = {this.state.check17} onChange = {() => this.checkBoxValue(17)}/>
                          <Text  style = {styles.checkBoxFilter } >Padaria</Text>
                        </View>
                        <View style= {{ flexDirection: 'row'}}>
                          <CheckBox value = {this.state.check18} onChange = {() => this.checkBoxValue(18)}/>
                          <Text style = {styles.checkBoxFilter } >Gelataria</Text>
                        </View>
            
                  </View>

                  <TouchableOpacity onPress = {() => {
                     this.setModalFilterVisible(true)
                     this.setModalFilterVisibleEstabelecimento(false)}}
                     style = {{ 
                          borderColor: '#a6a6a6', width: screen.width-50,
                          borderStyle: 'solid',
                          borderTopWidth: 1,
                          position:'absolute', bottom:'2%',
                     }}>

                        <Text style = {styles.filterTextBottom}> Aplicar </Text>

                  </TouchableOpacity>
                  
               </View>

            </Modal>
      );

        var modalUser = (
               <Modal transparent={true}
                    animationType="fade"
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setModalVisible(false) }}  >



                    <View style={styles.modalUserIcon}>
                    
                        <View style={{ position: 'absolute', bottom: '80%', left: '5%', flexDirection: 'row' }}>
                            < SimpleLineIcons name="home" size={20} style={{ top: '5%' }} />
                            <Text style={styles.modalText}> A Minha Conta </Text>
                        </View>


                        <View style={{ position: 'absolute', bottom: '63%', left: '5%', flexDirection: 'row' }}>
                            < MaterialCommunityIcons name="silverware-variant" size={20} style={{ top: '5%' }} />
                            <Text style={styles.modalText}> Meus Estabelecimentos </Text>
                        </View>

                        <TouchableOpacity onPress={this._onPressEstabelecimentos}
                            style={{ position: 'absolute', bottom: '45%', left: '5%' }}
                        >

                            <View style={{ flexDirection: 'row' }} >
                                <MaterialIcons name="add-circle-outline" size={20} style={{ top: '5%' }} />
                                <Text style={styles.modalText}> Registar Estabelecimentos </Text>

                            </View>

                        </TouchableOpacity>

                        <View style={{ position: 'absolute', bottom: '25%', left: '5%', flexDirection: 'row' }}>
                            < SimpleLineIcons name="settings" size={20} style={{ top: '10%' }} />
                            <Text style={styles.modalText}> Definições </Text>
                        </View>

                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!this.state.modalVisible) }}
                            style={{ position: 'absolute', bottom: '5%', left: '5%' }}
                        >

                            <View style={{ flexDirection: 'row' }} >
                                <SimpleLineIcons name="power" size={20} style={{ top: '15%' }} />
                                <Text style={styles.modalText}> Sair </Text>

                            </View>

                        </TouchableOpacity>

                    </View>

                </Modal>

        );


        var searchIconFalse = (
            <View style={styles.iconSearchFalse} >
                <TouchableOpacity style={styles.buttonContainer} onPress={this._onPressSearch}>
                    < AntDesign name="search1" size={30} />
                </TouchableOpacity>
            </View>
        );

        var searchIconTrue = (
            <View style={styles.iconSearchTrue} >
                <TouchableOpacity style={styles.buttonContainer} onPress={this._onPressSearch}>
                    < AntDesign name="search1" size={30} />
                </TouchableOpacity>
            </View>
        ); 


        const isSearching = this.state.isOnSearch;
        let button;
        let iconSearch;

        if (!isSearching) {
            button = <TitleIcon />;
            iconSearch = searchIconFalse;
        }
        else {
            button = <SearchForm />;
            iconSearch = searchIconTrue;
        }

        return (

           
            <View style={styles.mainheader} >
            
                 
                  {modalFiltros}         
                  {modalFiltrosCozinha}
                  {modalFiltrosEstabelecimento}
                  {modalUser}

                <View style={styles.iconFilter} >
                    <TouchableOpacity style={styles.buttonContainer} onPress={this._onPressButton}>
                        < FontAwesome name="filter" size={30} />
                    </TouchableOpacity>
                </View>

                {iconSearch}
                {button}

                <View style={styles.iconUser} >
                    <TouchableOpacity style={styles.buttonContainer} onPress = {() => {this.setModalVisible(!this.state.modalVisible)}}>
                        < FontAwesome name="user-circle-o" size={30} />
                    </TouchableOpacity>
                </View>
            </View>

           


        );
    }
}

function TitleIcon(props) {
    return (
        <View style={{ height: 100, flexDirection: 'row' }}>
            <View style={styles.iconTitle} >
                <Smallicon />
            </View>
            <View style={styles.title} >
                <Text style={styles.titleText}> NaTUGA</Text>

            </View>
        </View>
    );
}
function SearchForm(props) {
    return (
        <View style={styles.searchform} >
            <TextInput
                style={styles.input}
                placeholder='Procurar'
                placeholderTextColor='rgba(0,0,0,1)'
            />
        </View  >
    );
}




const styles = StyleSheet.create({

    iconTitle: {
        justifyContent: 'center',
        marginTop: 3,
        marginLeft: -20,
    },
    title: {
        justifyContent: 'center',
        marginTop: 32,
    },

    titleText: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: -5
    },

    iconFilter: {
        marginTop: 25,
        marginLeft: 15,
        justifyContent: 'center',

    },

    iconSearchTrue: {
        marginTop: 25,
        marginLeft: 5,
        justifyContent: 'center',
    },

    iconSearchFalse: {
        marginTop: 25,
        marginLeft: -68,
        justifyContent: 'center',
    },

    iconUser: {
        marginTop: 25,
        justifyContent: 'center',
        marginRight: 15,
    },

    input: {
        fontSize: 14,
        backgroundColor: 'rgba(230,230,230,0.4)',
        textAlign: 'center',
        width: 200,
        paddingHorizontal: 5,
        borderRadius: 20
    },

    searchform: {
        justifyContent: 'center',
        marginTop: 25,
        marginRight: 20
    },

    buttonContainer: {
        backgroundColor: 'transparent',
    },


   filterTextTitle: {
     fontSize: 20,
     fontWeight: 'bold',
     marginLeft: 10,
     paddingVertical: 10,
     color: '#3f2949',
   },

    filterText: {
     fontSize: 20,
     marginLeft: 10,
     color: '#3f2949',
   },

    checkBoxFilter: {
        top: '4%', fontSize: 16
    },

    filterTextPrice: {
     fontSize: 20,
     marginLeft: 10,
     color: '#3f2949',
   },

    filterTextPriceTag: {
     fontSize: 20,
     color: '#3f2949',
   },

    filterTextAval: {
      fontSize: 20,
      marginLeft: 10,
      color: '#3f2949',
      paddingBottom: 20
    },

   filterTextBottom: {
     paddingTop: 10,
     fontSize: 20,
     color: '#3f2949',
     textAlign: 'center'
   },

    inputPrice: {
        fontSize: 14,
        backgroundColor: 'rgba(230,230,230,0.4)',
        width: 60,
        paddingHorizontal: 5,
        borderRadius: 5
    },

    inputLocation: {
        fontSize: 14,
        backgroundColor: 'rgba(230,230,230,0.4)',
        width: 200,
        paddingHorizontal: 5,
        borderRadius: 5,
        textAlign: 'left' 

    },

   sliderText: {
     marginLeft: 54,
     color: '#3f2949',
     fontWeight: 'bold'
   },
  
   modalUserIcon: {
     flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 215, 
      height: 150,
      marginTop: 55,
      marginLeft: 140,
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#a6a6a6'
   },

   modalText: {
      color: '#3f2949',
      marginTop: 10
   },

    mainheader: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FF7700'
    }

});