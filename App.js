import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Dimensions, 
  Button, 
  TouchableOpacity,
  TextInput, 
} from 'react-native';
import Icons from './components/Icon';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

    this._onPressButton = this._onPressButton.bind(this);
  }

  _onPressButton() {
    alert("clicked");
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Image source={require('./public/mainpage4.png')} style={styles.image}/>
        </View>
        <View style={styles.icon}>
          <View style={styles.main}>
            <Icons />
            <Text style={styles.title}>
              NaTUGA
            </Text>
          </View>
          <View style={styles.alignItemsCenter}>
              <TextInput 
                style={styles.input}
                placeholder = 'Adicione a sua localização'   
              />
              <Icon.Button 
                name="map-marker"
                backgroundColor = "transparent"
                size={50}
                onPress={this._onPressButton} 
              />
          </View>
          
          <View style={styles.buttonInput}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this._onPressButton}>
                <Text style={styles.nothank}>
                  Não, obrigado
                </Text>
            </TouchableOpacity>
          </View>
          
        </View>
       
        
      </View> 
    );
  }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
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
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    paddingLeft: 5,
    paddingRight: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,

  },

  buttonContainer: {    
    backgroundColor: 'transparent',
  },

  nothank: {
    textDecorationLine: 'underline',
    color: '#FF7700',
  },

});
