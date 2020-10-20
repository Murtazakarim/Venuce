import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, TextInput, Image, Dimensions, ImageBackground, TouchableOpacity, Button} from 'react-native';
import Icon, {default as MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import {default as Octicons} from 'react-native-vector-icons/Octicons';
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';
import {default as FontAwesome5} from 'react-native-vector-icons/FontAwesome5';
import AppIntroSlider from 'react-native-app-intro-slider';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import DatePicker from 'react-native-datepicker';

let customFonts = {
  'gisha-font': require('../assets/font/gisha.ttf')
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DarkBlue = "#20295B";
const Gray = "#CBCBCB";
const DarkGray = "#848484";

// const category = (name, nav) =>{
//     return(
//         <>
//         <TouchableOpacity style={{width:120, margin:10 }} onPress={()=> nav.navigate('ViewAll', {type:name})}>
//         <ImageBackground source={require('../Images/camera.jpeg')} style={{width:'100%', height:120, justifyContent:'flex-end'}}  imageStyle={{ borderRadius: 10 }}>
//             <View style={{backgroundColor:'rgba(0,0,0,0.5)', borderBottomEndRadius:10, borderBottomStartRadius:10}}>
//                 <Text style={{color:'#fff', fontSize:18}}>
//                     {name}
//                 </Text>
//             </View>
//         </ImageBackground>
//         </TouchableOpacity>
//         </>
//     )
// }
class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            fontsLoaded: false,
            vanue: false,
            catering: true,
            Date: '', Month: '', Year: '',
        }
    }
         
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
      
    componentDidMount = async () => {
        this._loadFontsAsync();
        this.setState({ Date: new Date().getDate(), Month: new Date().getMonth() + 1, Year: new Date().getFullYear() })
      }

      handleOnCLick =()=> {
        this.setState({
            vanue: true,
            catering: false
        })
      }

      handleOnCLick1 =()=> {
        this.setState({
            vanue: false,
            catering: true
        })
      }

      _renderNextButton = () => {
        return (
          <View style={{width: '100%', height: 30, marginTop: -15}}>
              <FontAwesome5 name="chevron-right" size={24}  color="#28b87a" />
          </View>
        );
      };
      _renderBackButton = () => {
        return (
          <View style={{marginLeft: -7,marginTop: -15,width: 22,height: 30,}}>
              <FontAwesome5 name="chevron-left" size={24}  color="#28b87a" />
          </View>
        );
      };
      _renderItem = ({ item }) => {
        return (
        <View style={{marginLeft: 20, marginRight: 30, height:160, flexDirection:'row', justifyContent:'center'}}>
                        <View style={{flex:1, marginLeft: 5, width:'40%', height: 160, borderColor:'gray', borderWidth:1}}>
                            <Image style={{width:'100%', height:100}} source={require('../Images/1.jpeg')}  />
                            <Text style={{fontSize:13, paddingTop:5, fontFamily: 'gisha-font', paddingLeft: 5}}>{item.name1}</Text>
                            <Text style={{fontSize:7, paddingLeft:5, fontFamily: 'gisha-font',}}>{item.des1}</Text>
                        </View>
                        <View style={{flex:1, marginLeft:5, width:'40%', height: 160, borderColor:'gray', borderWidth:1}}>
                                                           
                            <Image style={{width:'100%', height:100}} source={require('../Images/2.jpeg')} />
                            <Text style={{fontSize:13, paddingTop:5,fontFamily: 'gisha-font', paddingLeft:5}}>{item.name2}</Text>
                            <Text style={{fontSize:7,fontFamily: 'gisha-font', paddingLeft:5}}>{item.des1}</Text>
                        </View>
        </View>
        );
      };
    render(){
        if (this.state.fontsLoaded) {
        return(
            <View style={{flex:1, backgroundColor:'#fff'}}>
            <StatusBar hidden={true} />
            

                {/* Header section */}
                <View style={Styles.header}>
                    <TouchableOpacity style={{padding: 5}}>
                        <MaterialCommunityIcons name={"menu"} size={40} color="#fff" onPress={this.props.navigation.openDrawer}/>
                    </TouchableOpacity>
                    <Text style={{paddingLeft: '25%', fontFamily: 'gisha-font', marginTop: '3%', fontSize: 25, color: '#fff' , fontWeight: 'bold'}}>Home</Text>
                </View>
                {/* Header section */}
                <View style={{flex: 0.7}}>

                    <ImageBackground style={{height:'100%',  width: '100%'}}  source={require('../Images/rest.jpg')}>
                        
                                <View style={{alignSelf:'center', flexDirection:'row', marginTop: 15, justifyContent: 'center', height:'18%', width:'100%'}}>
                                    <Image style={Styles.dasbordlogo} source={require('../Images/dasbordlogo.png')}  />
                                    {/* <Text style={{fontSize:30, color:'#28b87a', fontFamily: 'gisha-font',  alignSelf:'center'}}>Venuce</Text> */}
                                </View>
                                
                            <View style={{flexDirection:'row', marginLeft: '25%', marginTop: '10%', height:'15%', width:'100%'}}>
                                
                                <TouchableOpacity style={[Styles.VanueBox , this.state.vanue? Styles.vanueuncheck: Styles.vanuecheck]} onPress={this.handleOnCLick}>
                                <Text style={[Styles.Text , this.state.vanue?  Styles.venuetextcheck: Styles.venuetextuncheck]}>Venue</Text> 
                                </TouchableOpacity>

                                <TouchableOpacity style={[Styles.CateringBox, this.state.catering? Styles.vanueuncheck:Styles.vanuecheck]} onPress={this.handleOnCLick1}>
                                <Text style={[Styles.Text ,  this.state.catering?  Styles.venuetextcheck: Styles.venuetextuncheck]}>Catering</Text> 
                                </TouchableOpacity>
                                
                            </View>
                            <View style={{justifyContent:'center', flexDirection:'row', height:'15%', width:'100%', marginTop:25}}>
                                <TextInput style={Styles.Box} placeholder="City"></TextInput>
                                <View style={{width:5}}/>
                                <TextInput style={Styles.Box} keyboardType="decimal-pad" placeholder="Number of people"></TextInput>
                                <View style={{width:5}}/>
                                <DatePicker style={Styles.BoxDate} date={this.state.date} mode="date" placeholder="Event date" format="YYYY-MM-DD" maxDate="2025-05-08" confirmBtnText="Confirm" cancelBtnText="Cancel"
                                      minDate={this.state.Year + "-" + this.state.Month + "-" + this.state.Date}
                                      androidMode='spinner'
                                      default={false}
                                      customStyles={{
                                        dateInput: { borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0, marginTop: -15 },
                                        dateIcon: { marginTop: -10, width: 17, height: 17, },
                                        dateText: { fontFamily: 'gisha-font', fontSize: 12, color: '#28b87a' },
                                        placeholderText: {fontFamily: 'gisha-font', fontSize: 12, color: '#969696' },
                                      }} onDateChange={(date) => { this.setState({ date: date }) }}
                                />
                                <View style={{width:5}}/>
                                <TouchableOpacity>
                                <MaterialCommunityIcons name="magnify" style={{backgroundColor:'#28b87a', width:30, height:30, padding: 5, borderRadius:5}} size={22} color="#fff" /> 
                                </TouchableOpacity>
                            </View>

                            <Text style={{textAlign: 'center', fontFamily: 'gisha-font', color: '#fff', marginTop: 10, textDecorationLine: 'underline'}}>Advance filter</Text>
                        
                    </ImageBackground> 
                    </View>
              
                <View style={{flex:1,  marginTop: 10}}>
                    <Text style={[Styles.text, this.state.vanue ? Styles.check : Styles.uncheck]}>Browse venue by category</Text>
                    <View style={{height:'30%', flexDirection:'row', justifyContent:'center'}}>
                        <TouchableOpacity style={{width:'30%', height:'100%', margin:4, borderColor:'gray', borderRadius:5, borderWidth:1}} onPress={()=> this.props.navigation.navigate("Banquets")}>
                             <Image style={{width:'100%', height:'100%', borderRadius:5, borderWidth:1,}} source={require('../Images/banqut.png')}  />
                        </TouchableOpacity>
                        <Image style={{width:'30%', height:'100%', margin:4, borderColor:'gray', borderRadius:5, borderWidth:1}} source={require('../Images/hotal.png')}  />
                        <Image style={{width:'30%', height:'100%', margin:4, borderColor:'gray', borderRadius:5, borderWidth:1}} source={require('../Images/restaurant.png')}  />
                    </View>
                    
                    <Text style={[Styles.text3, this.state.catering ? Styles.check : Styles.uncheck]}>Browse catering by category</Text>

                    <View style={{height: 160, width: '100%'}}>
                    <AppIntroSlider
                            data={slides}
                            renderItem={this._renderItem}
                            showPrevButton={true}
                            renderNextButton={this._renderNextButton}
                            renderPrevButton={this._renderBackButton}
                            dotStyle={{backgroundColor: 'transparent'}}
                            activeDotStyle={{backgroundColor: 'transparent'}}
                            hidePagination={true}
                            />
                  
                    </View>
                </View>
             </View>
        );
    } else {
            return <AppLoading />;
          }
    }
}

const Styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:'8.5%',
        justifyContent: 'flex-start',
        backgroundColor: '#28b87a'
    },
    
    VanueBox:{
        width:80, 
        height: 30, 
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    },
    CateringBox:{
        width:80, 
        height: 30,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    Box:{
        width:'27%', 
        height:'90%', 
        backgroundColor:'#fff', 
        textAlign:'center', 
        fontSize:10, 
        color:'#28b87a',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
        fontFamily: 'gisha-font',
    },
    
    dasbordlogo: {
      width: windowHeight / 4,
      height: windowHeight / 10,
      alignSelf: 'center'
    },
    BoxDate:{
      width:'27%', 
      height:'90%', 
      backgroundColor:'#fff', 
      textAlign:'center', 
      fontSize:6, 
      color:'black',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'gray',
      fontFamily: 'gisha-font',
    },

    Text:{
        fontSize:16, 
        fontWeight:'800', 
        textAlignVertical:'center', 
        marginTop: 4, 
        textAlign:'center',
        fontFamily: 'gisha-font',
    },

  


    text:{
        fontSize:20,  
        fontFamily: 'gisha-font', 
        marginLeft: 10
        },

        text3:{
          fontSize:20,  
          fontFamily: 'gisha-font', 
          margin: 10
          },   
        uncheck:{
            color: 'black' 
        },
        check:{
            color: '#28b87a' 
        },
        venuetextcheck:{
          color: '#28b87a' 
      },
      venuetextuncheck:{
        color: '#fff' 
    },
        vanuecheck:{
          backgroundColor:'#28b87a', 
        },
        vanueuncheck:{
          backgroundColor:'#fff', 
        }
})


const slides = [
    {
      key: 's1',
      name1: 'LalQila',
      name2: 'Mariott Hotel',
      des1: 'Producers: Dhaval Patel, Tariq Mohammad,  Sada Bhuvad,  Cyrus DasturDirector:    Hasnain Hyderabadawala',
      image1: "'../Images/1.jpeg'",
      image2: "'../Images/2.jpeg'",
    },
    {
      key: 's2',
      name1: 'World Inn Hotal',
      name2: 'Royal Taj hotal',
      des1: 'Producers: Dhaval Patel, Tariq Mohammad,  Sada Bhuvad,  Cyrus DasturDirector:    Hasnain Hyderabadawala',
      image1: "'../Images/1.jpeg'",
      image2: "'../Images/2.jpeg'",
    },
    {
      key: 's3',
      name1: 'LalQila',
      name2: 'Mariott Hotel',
      des1: 'Producers: Dhaval Patel, Tariq Mohammad,  Sada Bhuvad,  Cyrus DasturDirector:    Hasnain Hyderabadawala',
      image1: "'../Images/1.jpeg'",
      image2: "'../Images/2.jpeg'",
    },
    {
      key: 's4',
      name1: 'LalQila',
      name2: 'Mariott Hotel',
      des1: 'Producers: Dhaval Patel, Tariq Mohammad,  Sada Bhuvad,  Cyrus DasturDirector:    Hasnain Hyderabadawala',
      image1: "'../Images/1.jpeg'",
      image2: "'../Images/2.jpeg'",
    },
    {
      key: 's5',
      name1: 'LalQila',
      name2: 'Mariott Hotel',
      des1: 'Producers: Dhaval Patel, Tariq Mohammad,  Sada Bhuvad,  Cyrus DasturDirector:    Hasnain Hyderabadawala',
      image1: "'../Images/1.jpeg'",
      image2: "'../Images/2.jpeg'",
    },
    
  ];
export default Dashboard;
