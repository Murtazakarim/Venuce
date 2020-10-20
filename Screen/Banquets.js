import React from 'react';
import {View, TouchableOpacity, Image, Dimensions, StyleSheet, StatusBar, Text, SafeAreaView} from 'react-native';
import Icon, {default as MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontAwesome5} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';

let customFonts = {
  'gisha-font': require('../assets/font/gisha.ttf')
};

class Banquets extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
        Default_Rating: 3,
        Max_Rating: 5,
        fontsLoaded: false,
        heart : true, heart1: true, heart2: true, heart3: true, heart4: true,
        
        
    }
    
}
// agregarFavoritos(){
//   this.setState({ heart: true });
// }



UpdateRating(key) {
  this.setState({ Default_Rating: key });
}

async _loadFontsAsync() {
  await Font.loadAsync(customFonts);
  this.setState({ fontsLoaded: true });
}

handleOnCLick =()=> {
  this.setState({
      heart: !this.state.heart
  })
}

handleOnCLick1 =()=> {
  this.setState({
      heart1: !this.state.heart1
  })
}

handleOnCLick2 =()=> {
  this.setState({
      heart2: !this.state.heart2
  })
}

handleOnCLick3 =()=> {
  this.setState({
      heart3: !this.state.heart3
  })
}

handleOnCLick4 =()=> {
  this.setState({
      heart4: !this.state.heart4
  })
}

async renderBookMark(post_id){
  await AsyncStorage.getItem('bookmark').then(token => {
      const res = JSON.parse(token);
      let data = res.find(value => value === post_id);
      if (data !== null) {
           let data = res.find(value => value === post_id);
           return data == null
               ? this.setState({ bookmark: false })
               : this.setState({ bookmark: true });
       }
  });
};

componentDidMount = async () => {
  this._loadFontsAsync();
}
    render(){
      let React_Native_Rating_Bar = [];
        for (var i = 1; i <= this.state.Max_Rating; i++) {
          React_Native_Rating_Bar.push(
            <TouchableOpacity
              activeOpacity={0.7}
              key={i}
              onPress={this.UpdateRating.bind(this, i)}>
              <Image
                style={styles.StarImage}
                source={
                  i <= this.state.Default_Rating
                    ? require('../Images/stardark.png')
                    : require('../Images/starlight.png')
                }
              />
            </TouchableOpacity>
          );
        }
        if (this.state.fontsLoaded) {
        return(

            <View style={styles.container}>
            <StatusBar hidden={true}></StatusBar>
            
                
                <View style={styles.header}>
                            <TouchableOpacity style={{marginTop: 15, marginLeft: '5%'}} onPress={()=> this.props.navigation.navigate('Dashboard')} >
                                <FontAwesome5 name="chevron-left" size={24} color="#fff"/>
                            </TouchableOpacity>
                            
                            <Text style={{marginLeft: '5%', fontFamily: 'gisha-font', marginTop: 15, fontSize: 22, color: '#fff' ,}}>Search results...</Text>

                            <View style={{width: '15%'}}></View>

                            <TouchableOpacity style={{marginTop: 12,}} >
                              <MaterialCommunityIcons name="magnify" size={30} color="#fff" /> 
                            </TouchableOpacity> 

                            <TouchableOpacity style={{marginTop: 12, marginLeft: 8}} onPress={()=>this.renderBookMark(alert("Save Data"))}>
                              <Ionicons color={'#fff'} name={'md-bookmark'} size={30} />
                            </TouchableOpacity>
                </View>

                <View style={{width: '100%', height: '8.5%', flexDirection: 'row', backgroundColor: '#fff' , borderBottomColor: '#e1dfe0' , borderBottomWidth: 1}}> 
                        
                        <Text style={{marginLeft: 20, fontFamily: 'gisha-font', marginRight: '10%', marginTop: 15, fontSize: 13,}}>23,090 Venue</Text>

                        <TouchableOpacity style={styles.filterbox}> 
                        <Image style={{width:20, marginTop: 7, marginLeft: 10, marginRight: 5, height:20,}} source={require('../Images/filter.png')}  />
                        <Text style={{fontSize: 14,fontFamily: 'gisha-font', paddingTop: 8}}>Filters</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.filterbox}> 
                        <Image style={{width:18, marginTop: 7, marginLeft: 10, marginRight: 5, height:18,}} source={require('../Images/sorticon.png')}  />
                        <Text style={{fontSize: 14,fontFamily: 'gisha-font', paddingTop: 8}}>Sort</Text>
                        </TouchableOpacity>
                </View>

                <ScrollView style={{flex:1}}>

                <TouchableOpacity style={styles.cardview} onPress={()=> this.props.navigation.navigate('Details')}> 
                    <Image style={{width:130, marginTop:4, borderRadius: 5, marginLeft:5, marginRight:5, height:120,}} source={require('../Images/banquticon.png')}  />
                         <View style={{flexDirection: 'column' , width: 165, marginLeft: 10, marginTop: 5}}> 
                            <Text style={{fontWeight: '500', fontFamily: 'gisha-font', fontSize: 17}}>The Vanue</Text>
                            <Text style={{fontSize: 12 , fontFamily: 'gisha-font', marginTop: 10}}>Price per head               1800</Text>
                            <Text style={{fontFamily: 'gisha-font', fontSize: 12}}>DHA, phase 6 defence karachi</Text>
                            <Text style={{fontFamily: 'gisha-font', fontSize: 12}}>Catring</Text>
                            <View style={{flexDirection: 'row' , marginTop: 15}}>
                            {React_Native_Rating_Bar}                
                            </View>
                      
                        </View>

                    <View style={{flexDirection: 'column' , width: 25, marginTop: 5}}> 
                    <Image style={{width:25, height:25}} source={require('../Images/iconone.png')} />
                    <TouchableOpacity style={{width:35, marginTop: 70, height:35,}} onPress={this.handleOnCLick}>
                    <FontAwesome name="heart-o" size={20} color={this.state.heart ? '#28b87a' : 'red'} />
                    </TouchableOpacity>
                   </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.cardview}  onPress={()=> this.props.navigation.navigate('Details')}> 
                    <Image style={{width:130, marginTop:4, borderRadius: 5, marginLeft:5, marginRight:5, height:120,}} source={require('../Images/banquticon.png')}  />
                         <View style={{flexDirection: 'column' , width: 165, marginLeft: 10, marginTop: 5}}> 
                            <Text style={{fontWeight: '500',fontFamily: 'gisha-font', fontSize: 17}}>The Vanue</Text>
                            <Text style={{fontSize: 12 ,fontFamily: 'gisha-font', marginTop: 10}}>Price per head               1800</Text>
                            <Text style={{fontFamily: 'gisha-font',fontSize: 12}}>DHA, phase 6 defence karachi</Text>
                            <Text style={{fontFamily: 'gisha-font',fontSize: 12}}>Catring</Text>
                            <View style={{flexDirection: 'row' , marginTop: 15}}>
                            {React_Native_Rating_Bar}                
                            </View>
                      
                        </View>

                    <View style={{flexDirection: 'column' , width: 25, marginTop: 5}}> 
                    <Image style={{width:25, height:25,}} source={require('../Images/iconone.png')}/>
                    <TouchableOpacity style={{width:35, marginTop: 70, height:35,}} onPress={this.handleOnCLick1}>
                    <FontAwesome name="heart-o" size={20} color={this.state.heart1 ? '#28b87a' : 'red'} />
                    </TouchableOpacity>
                   </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardview}  onPress={()=> this.props.navigation.navigate('Details')}> 
                    <Image style={{width:130, marginTop:4, borderRadius: 5, marginLeft:5, marginRight:5, height:120,}} source={require('../Images/banquticon.png')}  />
                         <View style={{flexDirection: 'column' , width: 165, marginLeft: 10, marginTop: 5}}> 
                            <Text style={{fontWeight: '500',fontFamily: 'gisha-font', fontSize: 17}}>The Vanue</Text>
                            <Text style={{fontSize: 10 ,fontFamily: 'gisha-font', marginTop: 12}}>Price per head                        1800</Text>
                            <Text style={{fontFamily: 'gisha-font',fontSize: 12}}>DHA, phase 6 defence karachi</Text>
                            <Text style={{fontFamily: 'gisha-font',fontSize: 12}}>Catring</Text>
                            <View style={{flexDirection: 'row' , marginTop: 15}}>
                            {React_Native_Rating_Bar}                
                            </View>
                      
                        </View>

                    <View style={{flexDirection: 'column' , width: 25, marginTop: 5}}> 
                    <Image style={{width:25, height:25,}} source={require('../Images/iconone.png')}/>
                    <TouchableOpacity style={{width:35, marginTop: 70, height:35,}} onPress={this.handleOnCLick2}>
                    <FontAwesome name="heart-o" size={20} color={this.state.heart2 ? '#28b87a' : 'red'} />
                    </TouchableOpacity>
                   </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardview}  onPress={()=> this.props.navigation.navigate('Details')}> 
                    <Image style={{width:130, marginTop:4, borderRadius: 5, marginLeft:5, marginRight:5, height:120,}} source={require('../Images/banquticon.png')}  />
                         <View style={{flexDirection: 'column' , width: 165, marginLeft: 10, marginTop: 5}}> 
                            <Text style={{fontWeight: '500',fontFamily: 'gisha-font', fontSize: 17}}>The Vanue</Text>
                            <Text style={{fontSize: 12 ,fontFamily: 'gisha-font', marginTop: 10}}>Price per head               1800</Text>
                            <Text style={{fontFamily: 'gisha-font',fontSize: 12}}>DHA, phase 6 defence karachi</Text>
                            <Text style={{fontFamily: 'gisha-font',fontSize: 12}}>Catring</Text>
                            <View style={{flexDirection: 'row' , marginTop: 15}}>
                            {React_Native_Rating_Bar}                
                            </View>
                      
                        </View>

                    <View style={{flexDirection: 'column' , width: 25, marginTop: 5}}> 
                    <Image style={{width:25, height:25,}} source={require('../Images/iconone.png')}/>
                    <TouchableOpacity style={{width:35, marginTop: 70, height:35,}} onPress={this.handleOnCLick3}>
                    <FontAwesome name="heart-o" size={20} color={this.state.heart3 ? '#28b87a' : 'red'} />
                    </TouchableOpacity>
                   </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardview}  onPress={()=> this.props.navigation.navigate('Details')}> 
                    <Image style={{width:130, marginTop:4, borderRadius: 5, marginLeft:5, marginRight:5, height:120,}} source={require('../Images/banquticon.png')}  />
                         <View style={{flexDirection: 'column' , width: 165, marginLeft: 10, marginTop: 5}}> 
                            <Text style={{fontWeight: '500',fontFamily: 'gisha-font', fontSize: 17}}>The Vanue</Text>
                            <Text style={{fontSize: 12 ,fontFamily: 'gisha-font', marginTop: 10}}>Price per head               1800</Text>
                            <Text style={{fontFamily: 'gisha-font',fontSize: 12}}>DHA, phase 6 defence karachi</Text>
                            <Text style={{fontFamily: 'gisha-font',fontSize: 12}}>Catring</Text>
                            <View style={{flexDirection: 'row' , marginTop: 15}}>
                            {React_Native_Rating_Bar}                
                            </View>
                      
                        </View>

                    <View style={{flexDirection: 'column' , width: 25, marginTop: 5}}> 
                    <Image style={{width:25, height:25,}} source={require('../Images/iconone.png')}/>
                    <TouchableOpacity style={{width:35, marginTop: 70, height:35,}} onPress={this.handleOnCLick4}>
                    <FontAwesome name="heart-o" size={20} color={this.state.heart4 ? '#28b87a' : 'red'} />
                    </TouchableOpacity>
                   </View>
                </TouchableOpacity>

                </ScrollView>

            </View>
            
        )
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
      header:{
        flexDirection:'row',
        height: '9%',
        width: '100%',
        justifyContent: 'flex-start',
        backgroundColor: '#28b87a',
    },
    heartcheck:{
      color: '#28b87a'
    },
    heartuncheck:{
      color: 'red'
    },
    StarImage: {
      width: 17,
      height: 17,
      resizeMode: 'cover',
    },
    filterbox:{
      width: 80,
      height: 35,
      borderRadius: 5,
      marginTop: 7,
      backgroundColor: '#e1dfe0',
      marginLeft: 10,
      flexDirection: 'row'
    },
    tinyLogo: {
      width: 320,
      height: 100,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 50
    },
  
    cardview:{
      borderWidth: 1, 
      borderRadius: 5, 
      borderColor: '#e1dfe0', 
      width: '97%', 
      height: 130, 
      margin: 5, 
      flexDirection: 'row'
    },
      
  
     
  });
  export default Banquets