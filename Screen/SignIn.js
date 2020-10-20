import React, {Component}  from 'react';
import { StyleSheet, Image, Text, View ,Alert , StatusBar, TextInput, TouchableOpacity , KeyboardAvoidingView, Dimensions } from 'react-native';
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';



let customFonts = {
  'gisha-font': require('../assets/font/gisha.ttf')
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class App extends Component {

  constructor(props) {
    super(props);
    global.ID;
    this.state = {
      EmailInput: '',
      passwordInput: '',
      fontsLoaded: false,
      status: '',
      message: '',
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
    
    if(this.state.EmailInput){
      if(this.state.passwordInput){
          this.registerCall(viewid);
       }else{
      Alert.alert("Please enter password");
     }
     }else{
    Alert.alert("Please enter email");
    }
  }




registerCall(props){
var that = this;
var url =   "https://venuec.beautipe.com/api/login";
console.log("url:"+url);

fetch(url,{
     method: 'POST',
     headers: {
      'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
      'Content-Type': 'application/json'
    },
     body: JSON.stringify({"email": this.state.EmailInput,"password": this.state.passwordInput})
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
  
  // backAction = () => {
  //   Alert.alert("", "Are you sure you want to go exit?", [
  //     {
  //       text: "Cancel",
  //       onPress: () => null,
  //       style: "cancel"
  //     },
  //     { text: "YES", onPress: () => BackHandler.exitApp() }
  //   ]);
  //   return true;
  // };

  render(){
    if (this.state.fontsLoaded) {
    return(
              <KeyboardAvoidingView style={{flex:1}} keyboardVerticalOffset={-140} behavior='height'> 
                    <View style={styles.container}>
                        <StatusBar hidden = {true} />
                <View style={{flex: 0.2}}></View>
                <View style={{flex: 0.8, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={styles.tinyLogo} source={require('../Images/mainlogo.png')}></Image>
                </View>

                <View style={{flex: 0.5, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome name={"envelope"} style={{marginLeft:30}} size={22} color={'#28b87a'} />
                        <TextInput style={styles.Textfield} placeholder="Email" value={this.state.EmailInput} placeholderTextColor="#969696" onChangeText={EmailInput => this.setState({EmailInput})} 
                        returnKeyType="next"></TextInput>  
                </View>

                
                <View style={{flex: 0.5, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name={"key"} style={{marginLeft:30}} size={22} color={'#28b87a'} />
                    <TextInput style={styles.Textfield}  placeholderTextColor="#969696" placeholder="Password" value={this.state.passwordInput} onChangeText={passwordInput => this.setState({passwordInput})} 
                    returnKeyType="next"></TextInput>  
                </View>
  
                <View style={{flex:0.6,justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.button} onPress={()=> this.onClickListener(this.props) } >
                        <Text style={{textAlignVertical: 'center', fontFamily: 'gisha-font', textAlign: 'center', fontSize: 15, height: windowHeight/14,  color: 'white'}}>Sign in</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.1}}>
                    <Text style={styles.forgotpassword} onPress={()=> this.props.navigation.navigate("Forgot")}>Forgot Password ?</Text>
                </View>

                <View style={{flex:0.8, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate("SignUp")} >
                        <Text style={{textAlignVertical: 'center', fontFamily: 'gisha-font', textAlign: 'center', fontSize: 15, height: windowHeight/14,  color: 'white'}}>Sign up</Text>
                    </TouchableOpacity>
                </View>
      </View> 
  </KeyboardAvoidingView>  
  );
} else {
  return <AppLoading />;
}
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: Dimensions.get('window').width
    },

  
  tinyLogo: {
    width: windowWidth/1.2,
    height: windowHeight/5.92,
  },

  
    
    Textfield: {
      borderBottomWidth: 2,
      alignItems: "stretch",
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10,
      paddingLeft: 5,
      height: windowHeight/14.5, 
      width: windowWidth/1.4,
      borderColor: '#cccccc',
      borderBottomColor: '#28b87a',
      backgroundColor: '#ffffff',
      fontSize: 15,
      fontFamily: 'gisha-font'
    },

   forgotpassword:{
    textAlign: 'center',
    color: '#969696',
    marginTop: 10,
    fontFamily: 'gisha-font'
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
