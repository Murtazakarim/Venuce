import React, { Component } from "react";
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, TextInput,  Image} from "react-native"
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {FontAwesome5} from '@expo/vector-icons'

let customFonts = {
  'gisha-font': require('../assets/font/gisha.ttf')
};
export default class About extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
        }
      }

      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }

      

      componentDidMount = async() =>{
        this._loadFontsAsync();
      }

     
    
    render(){
      if (this.state.fontsLoaded) {
        return(
        <View style={styles.container}>
            
            <View style={{width:'100%', flexDirection: 'row', height: 55, backgroundColor: '#28b87a'}}>
                <TouchableOpacity style={{marginLeft:10, marginTop: 15}} onPress={()=> this.props.navigation.navigate("Dashboard")} >
                      <FontAwesome5 name="chevron-left" size={24} color="white"/>
                </TouchableOpacity>

                <Text style={{ paddingLeft: 15 , paddingTop: 20,fontFamily: 'gisha-font', color: "white", fontWeight: '500'}}>About Us</Text>    
                
            </View>
      
            <Text style={{  marginTop: 20, alignSelf: 'center', fontFamily: 'gisha-font', color: "black", fontWeight: '500'}}>WHO WE ARE</Text>    
        </View>

    
        );
      } else {
        return <AppLoading />;
      }
    }
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#fff'
},
profile:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFF",
    backgroundColor: 'white'
},

Textfield: {
    borderBottomWidth: 2,
    alignItems: "stretch",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    paddingLeft: 5,
    height: 40, 
    width: '70%',
    borderColor: '#cccccc',
    borderBottomColor: '#28b87a',
    backgroundColor: '#ffffff',
    fontSize: 15,  
    fontFamily: 'gisha-font'  
  },

name:{
    color: "#FFF",
    fontSize: 15, 
    fontWeight: "800",
    marginVertical: 8,
    fontFamily: 'gisha-font',
    marginLeft: 40,
},
button: {
    alignItems: 'stretch',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 40,
    borderColor: '#28b87a',
    backgroundColor: '#28b87a',
    borderWidth: 1,
    height: 45,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    },
tinyLogo:{
  width: 50,
  height: 60, 
  
}
});