import React, { Component } from 'react';
import {StyleSheet, Dimensions,Text, StatusBar,Alert, View ,ToastAndroid, Image, TextInput,  KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';
import {FontAwesome5} from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts = {
  'gisha-font': require('../assets/font/gisha.ttf')
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NameInput: '',
      EmailInput: '',
      PhoneInput: '',
      PasswordInput: '',
      ConfirmPasswordInput:'',
      fontsLoaded: false,
  }
}

async _loadFontsAsync() {
  await Font.loadAsync(customFonts);
  this.setState({ fontsLoaded: true });
}

 componentDidMount = async () => {
  this._loadFontsAsync();
}

onClickListener = (viewid) => {
   if(this.state.NameInput && this.state.NameInput && this.state.EmailInput && this.state.PhoneInput && this.state.PasswordInput && this.state.ConfirmPasswordInput){ 
  if(this.state.NameInput){
    if(this.state.EmailInput){
    if(this.state.PhoneInput){
      if(this.state.PasswordInput && this.state.PasswordInput >= 8){
        if(this.state.ConfirmPasswordInput){
          if(this.state.PasswordInput == this.state.ConfirmPasswordInput){
            this.registerCall(viewid);
          }else{
            ToastAndroid.show("confirm password is not match", ToastAndroid.SHORT); 
          }
          
        }else{
          ToastAndroid.show("Please enter confirm password", ToastAndroid.SHORT);
         }
        
     }else{
      ToastAndroid.show("Please enter password must be 8 character", ToastAndroid.SHORT);
     }
    }else {
      ToastAndroid.show("Please enter Mobile Number", ToastAndroid.SHORT);  
    }
  }else {
    ToastAndroid.show("Please enter email", ToastAndroid.SHORT);
  } 
   }else{
    ToastAndroid.show("Please enter name", ToastAndroid.SHORT);
    
  }
}else {
  ToastAndroid.show("Please enter all fields", ToastAndroid.SHORT);
}
}




registerCall(props){
var that = this;
var url =   "https://venuec.beautipe.com/api/register";
console.log("url:"+url);

fetch(url,{
   method: 'POST',
   headers: {
    'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
    'Content-Type': 'application/json'
  },
   body: JSON.stringify({"name": this.state.NameInput,"email": this.state.EmailInput
   ,"number": this.state.PhoneInput, "password":this.state.PasswordInput,"password_confirmation": this.state.ConfirmPasswordInput})
   }).then(function (response) {
     return response.json();
   }).then(function (result) { 
      console.log(result);
     if(!result.error){
      that.setState({ status: result.status,
                      message: result.message,
                   });
                   
      if(that.state.status == "Success"){
        Alert.alert("Hey"+that.state.message);
        props.navigation.navigate("Dashboard")

      }else{
        Alert.alert(""+ that.state.message);
      }
      
      console.log(that.state.message);
  }else{
   Alert.alert(result.status + result.message);
   
   console.log(result);
}
}).catch(function (error) {
console.log("-------- error ------- "+error);
alert("result:"+error)
}) 
}


render(){
  if (this.state.fontsLoaded) {
  return (
    <View style={styles.container}>
          <StatusBar hidden = {true} />
           
                <View style={{width:'100%', height:'7.5%', flexDirection: 'row', backgroundColor: '#fff'}}>
                      <TouchableOpacity style={{alignItems: "flex-start" , marginTop: 15, marginLeft: 15}} onPress={()=> this.props.navigation.navigate('SignIn')} >
                            <FontAwesome5 name="chevron-left" size={24} color="#28b87a"/>
                      </TouchableOpacity>
                 </View>

                 <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                     <Image style={styles.tinyLogo} source={require('../Images/mainlogo.png')}></Image>
                </View>
            
            
                <View style={{flex: 3.5, justifyContent: 'center', }}>
                        <View style={{flex: 0.5, marginTop: 20, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                            <FontAwesome name={"user"} size={22} color={'#28b87a'} />
                            <TextInput style={styles.Textfield} placeholder="Full Name" value={this.state.NameInput} placeholderTextColor="#969696" onChangeText={NameInput => this.setState({NameInput})}  
                            returnKeyType="next"></TextInput>  
                </View>    

                <View style={{flex: 0.5, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome name={"envelope"}  size={22} color={'#28b87a'} />
                        <TextInput style={styles.Textfield} placeholder="Email" value={this.state.EmailInput} placeholderTextColor="#969696" onChangeText={EmailInput => this.setState({EmailInput})} 
                        returnKeyType="next"></TextInput>  
                </View>

                  <View style={{flex: 0.5, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome name={"phone"} size={22} color={'#28b87a'} />
                        <TextInput style={styles.Textfield} placeholder="Phone number" value={this.state.PhoneInput} placeholderTextColor="#969696" onChangeText={PhoneInput => this.setState({PhoneInput})} 
                        returnKeyType="next"></TextInput>  
                  </View>

                  <View style={{flex: 0.5, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                         <FontAwesome name={"key"} size={22} color={'#28b87a'} />
                        <TextInput style={styles.Textfield} placeholderTextColor="#969696" value={this.state.PasswordInput} placeholder="Password" onChangeText={PasswordInput => this.setState({PasswordInput})} 
                        returnKeyType="next"></TextInput>  
                 </View>

                 <View style={{flex: 0.5, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome name={"key"} size={22} color={'#28b87a'} />
                        <TextInput style={styles.Textfield} placeholderTextColor="#969696" value={this.state.ConfirmPasswordInput} placeholder="Confirm Password" onChangeText={ConfirmPasswordInput => this.setState({ConfirmPasswordInput})} 
                        returnKeyType="next"></TextInput>  
                 </View> 

                 <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.button}  onPress={()=> this.onClickListener(this.props)} >
                        <Text style={{textAlignVertical: 'center', fontFamily: 'gisha-font', fontSize: 15, textAlign: 'center', height: windowHeight/14,  color: 'white'}}>Sing up</Text>
                    </TouchableOpacity>
                 </View>

               <View style={{flex: 0.3, justifyContent: 'center'}}></View>
            </View>
    </View>
  );
} else {
  return <AppLoading />;
}
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    },

    headertitle:{
      color: 'white',
      position: 'absolute',
      left: '45%',
      fontSize: 15,
      fontWeight: '800',
      marginTop: 10,
      
  },
  Textfield: {
    borderBottomWidth: 2,
    alignItems: "stretch",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    height: windowHeight/14.5, 
    width: windowWidth/1.4,
    borderColor: '#cccccc',
    borderBottomColor: '#28b87a',
    backgroundColor: '#ffffff',
    fontSize: 15,
    fontFamily: 'gisha-font'
  },

  checkbox:{
    marginLeft: 5,
    
  },
  tinyLogo: {
    width: windowWidth/1.2,
    height: windowHeight/5.92,
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
export default Signup