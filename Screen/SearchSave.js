import React, { Component } from "react";
import {View, Text, TouchableOpacity, StyleSheet, Alert, TextInput,  Image} from "react-native"
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {FontAwesome5} from '@expo/vector-icons'

let customFonts = {
  'gisha-font': require('../assets/font/gisha.ttf')
};
export default class SearchSave extends Component{
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

                <Text style={{ paddingLeft: 15 , paddingTop: 20,fontFamily: 'gisha-font', color: "white", fontWeight: '500'}}>Search Save</Text>    
                
            </View>
      
            <TouchableOpacity style={styles.CardView}>
            
            <View style={{flexDirection: 'column'}}>
                <Text style={{ paddingLeft: 15 , paddingTop: 10,fontFamily: 'gisha-font', color: "Black", fontWeight: 'bold'}}>DHA</Text>    
                <Text style={{ paddingLeft: 15 , paddingTop: 10,fontFamily: 'gisha-font', color: "Black", fontWeight: '500'}}>PURPOSE: Rent</Text>    
                <Text style={{ paddingLeft: 15 , paddingTop: 10,fontFamily: 'gisha-font', color: "Black", fontWeight: '500'}}>LalQila</Text>    
            </View>

            <View style={{flexDirection: 'column' , marginTop: 30}}>
                <Text style={{ paddingLeft: 15 , paddingTop: 10,fontFamily: 'gisha-font', color: "Black", fontWeight: '500'}}>NAME: LalQila</Text>    
                <Text style={{ paddingLeft: 15 , paddingTop: 10,fontFamily: 'gisha-font', color: "Black", fontWeight: '500'}}>LOCATION: Karachi</Text>    
            </View>

            <TouchableOpacity style={{marginLeft: 25, marginTop: 60}} onPress={()=> Alert.alert("Delect from Search","",[{text: "NO",onPress: () => console.log("Cancel Pressed"),style: "cancel"},
                                                                                                { text: "OK", onPress: () => console.log("OK Pressed") }
                                                                                            ],
                                                                                            {cancelable: false}
                                                                                            )}>
                <FontAwesome5 name="trash" size={22}  color="#28b87a"/>
            </TouchableOpacity>
            
            </TouchableOpacity>   
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

CardView:{
    marginTop: 10,
    width:'94%', 
    flexDirection: 'row', 
    height: 100, 
    marginLeft: 10,
    backgroundColor: "white", 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#28b87a"
}

});