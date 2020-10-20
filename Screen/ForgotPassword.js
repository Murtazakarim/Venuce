import React, { Component } from 'react';
import { StyleSheet, Text, Image, View , TextInput, KeyboardAvoidingView, TouchableOpacity, Dimensions } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import androidcalender from 'react-native-date-picker'

let customFonts = {
  'gisha-font': require('../assets/font/gisha.ttf')
};
const windowWidth =  Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class frogotPassword extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      Visibility: false, 
      DateDisplay: "",
      date: '',
    }
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount = async () => {
    this._loadFontsAsync();
  }
  render(){
    if (this.state.fontsLoaded) {
        return (

            <KeyboardAvoidingView style={{flex:1}} keyboardVerticalOffset={-120} behavior='height'>

            {/* <View style={{flexDirection: 'row' , backgroundColor: 'white', flex: 1}}>
            
            <View style={{width:40, height: 50 , backgroundColor: 'white'}}>
                <TouchableOpacity style={{marginLeft:10, marginTop: 10}} onPress={()=> this.props.navigation.navigate("SignIn")} >
                      <FontAwesome5 name="chevron-left" size={24} color="#28b87a"/>
                </TouchableOpacity>
            </View> */}

            {/* <View style={{flex: 1.5, backgroundColor: 'white', justifyContent: 'center', flexDirection: 'row'}}>
              <Image style={styles.tinyLogo} source={require('../Images/logo.png')}></Image>
            </View> */}

        {/* </View> */}
    
      <View style={styles.container}>

            <View style={{width:'100%', height: '7.5%' , backgroundColor: 'white'}}>
                <TouchableOpacity style={{marginLeft:10, marginTop: 10}} onPress={()=> this.props.navigation.navigate("SignIn")} >
                      <FontAwesome5 name="chevron-left" size={24} color="#28b87a"/>
                </TouchableOpacity>
            </View> 

             <View style={{flex: 0.5}}></View>

            <View style={{flex: 1.5, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={styles.tinyLogo} source={require('../Images/mainlogo.png')}></Image>
            </View>
      
      <View style={{flex: 1, marginLeft: -5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <TextInput style={styles.Box} keyboardType="number-pad"></TextInput>
      <TextInput style={styles.Box} keyboardType="number-pad"></TextInput>
      <TextInput style={styles.Box} keyboardType="number-pad"></TextInput>
      <TextInput style={styles.Box} keyboardType="number-pad"></TextInput>
      <TextInput style={styles.Box} keyboardType="number-pad"></TextInput>
      <TextInput style={styles.Box} keyboardType="number-pad"></TextInput>
      </View>

      <View style={{flex: 1.2,justifyContent: 'center',alignItems: 'center'}}>
              <TouchableOpacity style={styles.button}>
                  <Text style={{textAlignVertical: 'center',fontFamily: 'gisha-font', textAlign: 'center', height: 40,color: '#fff'}}>Verify Now</Text>
              </TouchableOpacity>
              <Text style={{textAlignVertical: 'center', textAlign: 'center',fontFamily: 'gisha-font', marginTop: 10, fontSize:15, height: 40,color: '#28b87a'}}>Resend Code</Text>
      </View>
      
      <View style={{flex: 0.1 , flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{textAlignVertical: 'center', textAlign: 'center', fontSize:15,fontFamily: 'gisha-font', height: 40,color: '#969696'}}>Code Expire in </Text>
            <Text style={{textAlignVertical: 'center', textAlign: 'center',fontFamily: 'gisha-font', marginLeft:10, fontSize:15, height: 40,color: 'red'}}>00:19</Text>
      </View>       
      
    <View style={{flex: 1.8}}> 
    
    </View>

    </View>
    </KeyboardAvoidingView> 
 );
} else {
  return <AppLoading />;
}
}
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    },
    tinyLogo: {
      width: windowWidth/1.2,
      height: windowHeight/5.92,
    },
  
    Box:{
    backgroundColor: "#28b87a" , 
    width: windowWidth/7.2, 
    height: windowHeight/12.5, 
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center', 
    borderWidth:1,
    borderRadius:5,
    borderColor: "#28b87a",
    marginLeft: 5,
    fontFamily: 'gisha-font',
    
  },
  button: {
    alignItems: 'stretch',
    width: windowWidth/1.2,
    borderColor: '#28b87a',
    backgroundColor: '#28b87a',
    borderWidth: 1,
    height: windowHeight/13,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    },
});
