import React, { Component } from "react";
import {View, Text, TouchableOpacity, StyleSheet, Alert, TextInput,  Image} from "react-native"
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {FontAwesome5} from '@expo/vector-icons'
import { color } from "react-native-reanimated";

let customFonts = {
  'gisha-font': require('../assets/font/gisha.ttf')
};
export default class Favourites extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            favourites: false,
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

                <Text style={{ paddingLeft: 15 , paddingTop: 20,fontFamily: 'gisha-font', color: "white", fontWeight: '500'}}>Favourites</Text>    
            </View>


            <TouchableOpacity style={styles.CardView}>
            <Image style={{width:'35%', height:100, margin:4,  borderRadius:5, borderWidth:1}} source={require('../Images/Map.jpg')}/>
            
            <View style={{flexDirection: 'column'}}>
                <Text style={{ paddingLeft: 15 , paddingTop: 10,fontFamily: 'gisha-font', color: "Black", fontWeight: 'bold'}}>PKR 1 Lac</Text>    
                <Text style={{ paddingLeft: 15 , paddingTop: 10,fontFamily: 'gisha-font', color: "Black", fontWeight: '500'}}>DHA 4 Karachi</Text>    
                <Text style={{ paddingLeft: 15 , paddingTop: 10,fontFamily: 'gisha-font', color: "Black", fontWeight: '500'}}>LalQila</Text>    
            </View>

            <TouchableOpacity style={{marginLeft: 50, marginTop: 80}} onPress={()=> Alert.alert("Remove from Favourites?","",[{text: "NO",onPress: () => console.log("Cancel Pressed"),style: "cancel"},
                                                                                                { text: "OK", onPress: () => console.log("OK Pressed") }
                                                                                            ],
                                                                                            {cancelable: false}
                                                                                            )}>
                <FontAwesome5 name="heart" size={22}  color="#28b87a"/>
            </TouchableOpacity>
            
            </TouchableOpacity>   
                 
                 <View style={{flex: 0.5, justifyContent: 'center'}}></View>
            
            
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
    height: 110, 
    marginLeft: 10,
    backgroundColor: "white", 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#28b87a"
    
}



  

});