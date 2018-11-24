import React from 'react';
import { 
  Alert,
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Dimensions, 
  Button, 
  TouchableOpacity,
  TextInput, 
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Icons from './components/Icon';
import Restaurant from './components/Restaurant/Restaurant'
import Restaurant2 from './components/Restaurant/Restaurant2'
import MenuRegister from './components/RegisterRestaurant/MenuRegister'
import RegisterEstabelecimento from './components/RegisterRestaurant/RegisterEstabelecimento'
import RegisterEstabelecimentoSeguinte from './components/RegisterRestaurant/RegisterEstabelecimentoSeguinte'
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/EvilIcons';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import InfoPage from './components/RestaurantPage/InfoPage';
import InfoPage2 from './components/RestaurantPage/InfoPage2';
import NTHeader from './components/NTHeader'



class App extends React.Component {

  static navigationOptions = {
      title: 'Main Page',
      header: null
    };  

  constructor(props) {
    super(props);

    this.state = {
      
    };

    this._onPressButton = this._onPressButton.bind(this);
  }

  /* Está tudo comentado e só esta ali restaurant para testar */

  _onPressButton() {
    alert("Não Disponivel");
  }
  
  render() {
    
    
    const {navigate} = this.props.navigation;
    
    return (
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior= "padding"
        >
          <LinearGradient colors={['#cccccc','#FF8C00', '#000000']} style={{flex: 1}}>
            <View style={styles.container}>
              <View style={styles.icon}>
                <View style={[styles.main, styles.iconTitle]}>
                  <Icons />
                  <Text style={styles.title}>
                    NaTUGA
                  </Text>
                </View>
                <View style={styles.search}>
                  <View style={styles.alignItemsCenter}>
                      <TextInput 
                        onSubmitEditing={()=>{Alert.alert('Pesquisa','Não Disponivel');}}
                        style={styles.input}
                        placeholder = 'Adicione a sua localização'   
                        placeholderTextColor= 'rgba(0,0,0,1)'
                      />
                      <Icon.Button 
                        style={styles.iconbutton}
                        name="location"
                        color = '#F5F5F5'
                        backgroundColor = "transparent"
                        size={50}
                        onPress={() => navigate('RestaurantsPage')} 
                      />
                  </View>
                  
                  <View style={styles.buttonInput}>
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={() => navigate('RestaurantsPage')}>
                        <Text style={styles.nothank}>
                          Não, obrigado
                        </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
              </View>
            
            </View>
          </LinearGradient>
        </KeyboardAvoidingView>
    );
  }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },

  iconTitle: {
    position: 'relative',
    top: -20,
  },

  iconbutton: {
    position: 'relative',
    paddingRight:0,
    paddingLeft:0
  },

  search:{
    marginTop: 20,
    position: 'relative',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'rgb(230, 130, 0)'
  },
  alignItemsCenter: {
    alignItems: 'center',
    flexDirection:"row",
  },

  title: {
    fontWeight: 'bold',
    fontSize: 60,
  },

  image: {
    height: window.height,
    width: window.width,
  },

  icon: {
    position: "absolute",
  },

  icons_location: {
    backgroundColor: "transparent", 
  },

  buttonInput: {
    alignItems: 'center',
  },

  input: {
    marginLeft:'10%',
    fontSize: 17,
    width: '65%',
    backgroundColor: 'rgba(230,230,230,0.4)',
    paddingHorizontal: 13,    
    paddingVertical:10,
    borderRadius:22,
  },

  buttonContainer: {    
    backgroundColor: 'transparent',
  },

  nothank: {
    textDecorationLine: 'underline',
    color: '#F5F5F5',
    marginTop: '5%'
  },

});

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  RestaurantsPage: {
    screen: Restaurant
  },
  RestaurantsPage2: {
    screen: Restaurant2
  },
  InfoPage:{
    screen: InfoPage
  },
  InfoPage2:{
    screen: InfoPage2
  },
  Register:{
    screen:RegisterEstabelecimento
  },
  Register2:{
    screen:RegisterEstabelecimentoSeguinte
  },
  Register3:{
    screen:MenuRegister
  },
  Header:{
    screen:NTHeader
  }
});

export default createAppContainer(AppNavigator)