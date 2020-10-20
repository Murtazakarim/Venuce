import React from 'react';
import { View, Share, CheckBox, TouchableOpacity, Image, StyleSheet, StatusBar, Text, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { default as FontAwesome } from 'react-native-vector-icons/FontAwesome';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import Communications from 'react-native-communications';



const shareOptions = {
  title: 'Mariott Hotel',
  message: 'Producers: Dhaval Patel, Tariq Mohammad,  Sada Bhuvad,  Cyrus DasturDirector:    Hasnain Hyderabadawala',
  url: 'www.example.com',
  subject: 'Subject'
};

let customFonts = {
  'gisha-font': require('../assets/font/gisha.ttf')
};


class Banquets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Default_Rating: 3,
      Max_Rating: 5,
      date: '', checked1: false, checked2: false, checked3: false, checked4: false,
      checked5: false, checked6: false, checked7: false, checked8: false,
      Date: '', Month: '', Year: '',
      fontsLoaded: false,
      heart: true,
      currentdate: '',
      currentmonth: '',
      currentyear: '',
      people: '',
      phoneNumber: '03113145690',
      FileNumbers: '687867867867',
      Message: 'gjjgjgj',
      data: [{
        value: '300',
      }, {
        value: '400',
      }, {
        value: '500',
      }, {
        value: '600',
      }, {
        value: '700',
      }],
    }

  }
  onChangeHandlerService = (value) => {
    this.setState({ people: value })
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  handleOnCLick = () => {
    this.setState({
      heart: !this.state.heart
    })
  }

  sendOnWhatsApp = () => {
    let url = 'whatsapp://send?text=' + "SomeTextHere" + '&phone=92' + "3113345690";
    Linking.openURL(url).then((data) => {
      console.log('WhatsApp Opened');
    }).catch(() => {
      alert('Make sure Whatsapp installed on your device');
    });
  }

  onSharePress = () => Share.share(shareOptions);
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Test User'
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };



  UpdateRating(key) {
    this.setState({ Default_Rating: key });
  }
  componentDidMount = async () => {
    this._loadFontsAsync();
    this.setState({ Date: new Date().getDate(), Month: new Date().getMonth() + 1, Year: new Date().getFullYear() })
  }


  render() {
    if (this.state.fontsLoaded) {
      return (

        <View style={styles.container}>
          <StatusBar hidden={true}></StatusBar>


          <View style={styles.header}>
            <TouchableOpacity style={{ marginTop: 10, marginLeft: 15 }} onPress={() => this.props.navigation.navigate('Banquets')} >
              <FontAwesome5 name="chevron-left" size={24} color="#fff" />
            </TouchableOpacity>

            <Text style={{ marginLeft: 90, marginTop: 10, fontSize: 22, fontFamily: 'gisha-font', color: '#fff', }}>DETAILS</Text>

            <TouchableOpacity style={{ marginTop: 14, marginLeft: '15%' }} onPress={this.handleOnCLick}>
              <FontAwesome name="heart-o" size={25} color={this.state.heart ? '#fff' : 'red'} />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 12, marginLeft: '3%' }} onPress={this.onShare}>
              <Ionicons color={'#fff'} name={'md-share'} size={30} />
            </TouchableOpacity>
          </View>

          <Image style={{ width: '100%', height: 150, }} source={require('../Images/detailsicon.png')} />
          <ScrollView style={{ flex: 1 }}>

            <View style={{ width: '98%', height: 55, margin: 4, backgroundColor: '#f1eff0', }}>
              <Text style={{ marginLeft: 10, color: '#28b87a', fontFamily: 'gisha-font', marginTop: 5, fontSize: 20, }}>The Vanue</Text>
              <Text style={{ marginLeft: 10, color: '#28b87a', fontFamily: 'gisha-font', fontSize: 12, }}>DHA, phase 6 defence karachi</Text>
            </View>

            <View style={{ width: '98%', height: 25, marginLeft: 4, marginRight: 4, backgroundColor: '#f1eff0', }}>
              <Text style={{ marginLeft: 10, marginTop: 3, color: '#28b87a', fontFamily: 'gisha-font', fontSize: 12, }}>Price 80,000 - 12,0000</Text>
            </View>

            <Image style={{ width: '99%', marginLeft: 2, marginTop: 4, height: 210, }} source={require('../Images/flower.png')} />

            <View style={{ flexDirection: 'row', width: '100%', height: 34, marginLeft: 4, marginRight: 4 }}>
              <View style={{ width: '50%', height: 34, backgroundColor: '#f1eff0', }}>

                <Dropdown itemColor='white' selectedItemColor='white' textColor='#28b87a' baseColor='#969696' pickerStyle={{ backgroundColor: '#28b87a', borderWidth: 1, borderColor: '#28b87a' }}
                  containerStyle={{ marginLeft: 10, marginTop: -30, }}
                  inputContainerStyle={{ borderBottomColor: 'transparent' }}
                  label='Enter no of person'
                  labelTextStyle={{ fontFamily: 'gisha-font' }}
                  data={this.state.data}
                  onChangeText={value => this.onChangeHandlerService(value)}
                ></Dropdown>

              </View>
              <View style={{ width: '46%', marginLeft: 5, height: 34, backgroundColor: '#f1eff0', }}>
                <DatePicker style={{ marginLeft: -30, width: 190 }} date={this.state.date} mode="date" labelTextStyle={{ fontFamily: 'gisha-font' }} placeholder="Event date" format="YYYY-MM-DD" maxDate="2025-05-08" confirmBtnText="Confirm" cancelBtnText="Cancel"
                  minDate={this.state.Year + "-" + this.state.Month + "-" + this.state.Date}
                  androidMode='spinner'
                  default={false}
                  customStyles={{
                    dateInput: { borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0, marginTop: -10 },
                    dateIcon: { marginTop: -6, width: 25, height: 25, },
                    dateText: { color: '#28b87a' },
                    placeholderText: { color: '#969696' },
                  }} onDateChange={(date) => { this.setState({ date: date }) }}
                />
              </View>
            </View>

            <Text style={{ fontWeight: '500', marginLeft: 10, fontSize: 20, fontFamily: 'gisha-font', color: '#28b87a' }}>Add On</Text>

            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
              <CheckBox style={{}} tintColors={{ true: '#28b87a', false: '#969696' }} value={this.state.checked1} onValueChange={() => this.setState({ checked1: !this.state.checked1 })}></CheckBox>
              <Text style={[styles.text, this.state.checked1 ? styles.check : styles.uncheck]}>Red carpat</Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
              <CheckBox style={{}} tintColors={{ true: '#28b87a', false: '#969696' }} value={this.state.checked2} onValueChange={() => this.setState({ checked2: !this.state.checked2 })}></CheckBox>
              <Text style={[styles.text, this.state.checked2 ? styles.check : styles.uncheck]}>Lighting</Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
              <CheckBox style={{}} tintColors={{ true: '#28b87a', false: '#969696' }} value={this.state.checked3} onValueChange={() => this.setState({ checked3: !this.state.checked3 })}></CheckBox>
              <Text style={[styles.text, this.state.checked3 ? styles.check : styles.uncheck]}>Flowers</Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
              <CheckBox style={{}} tintColors={{ true: '#28b87a', false: '#969696' }} value={this.state.checked4} onValueChange={() => this.setState({ checked4: !this.state.checked4 })}></CheckBox>
              <Text style={[styles.text, this.state.checked4 ? styles.check : styles.uncheck]}>Decoration</Text>
            </View>

            <Text style={{ fontWeight: '500', marginLeft: 10, fontSize: 20, fontFamily: 'gisha-font', color: '#28b87a' }}>Menu</Text>

            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
              <CheckBox style={{}} tintColors={{ true: '#28b87a', false: '#969696' }} value={this.state.checked5} onValueChange={() => this.setState({ checked5: !this.state.checked5 })}></CheckBox>
              <Text style={[styles.text, this.state.checked5 ? styles.check : styles.uncheck]}>Red carpat</Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
              <CheckBox style={{}} tintColors={{ true: '#28b87a', false: '#969696' }} value={this.state.checked6} onValueChange={() => this.setState({ checked6: !this.state.checked6 })}></CheckBox>
              <Text style={[styles.text, this.state.checked6 ? styles.check : styles.uncheck]}>Lighting</Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
              <CheckBox style={{}} tintColors={{ true: '#28b87a', false: '#969696' }} value={this.state.checked7} onValueChange={() => this.setState({ checked7: !this.state.checked7 })}></CheckBox>
              <Text style={[styles.text, this.state.checked7 ? styles.check : styles.uncheck]}>Flowers</Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
              <CheckBox style={{}} tintColors={{ true: '#28b87a', false: '#969696' }} value={this.state.checked8} onValueChange={() => this.setState({ checked8: !this.state.checked8 })}></CheckBox>
              <Text style={[styles.text, this.state.checked8 ? styles.check : styles.uncheck]}>Decoration</Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10, marginTop: 10, justifyContent: 'space-between' }}>
              <TouchableOpacity style={{ height: '100%', flexDirection: 'row', width: '30%', backgroundColor: '#28b87a', borderRadius: 5 }} onPress={this.sendOnWhatsApp} >
                <Image style={{ width: 20, marginTop: 4, marginLeft: 10, height: 20, }} source={require('../Images/whatsapp.png')} />
                <Text style={{ color: '#fff', marginTop: 7, marginLeft: 4, fontFamily: 'gisha-font', fontSize: 12 }}>Whatsapp</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ height: 30, width: '30%', marginLeft: 10, backgroundColor: '#28b87a', flexDirection: 'row', borderRadius: 5 }} onPress={() => { Linking.openURL('tel:1195453466'); }} >
                <FontAwesome name={"phone"} style={{ marginLeft: 10, marginTop: 4 }} size={22} color={'#fff'} />
                <Text style={{ color: '#fff', marginTop: 7, marginLeft: 15, fontFamily: 'gisha-font', fontSize: 12 }}>Call</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ height: 30, width: '30%', marginLeft: 10, backgroundColor: '#28b87a', flexDirection: 'row', borderRadius: 5 }} onPress={() => Communications.text('01233234789', 'SomeTextHere')}>
                <FontAwesome name={"comment"} style={{ marginLeft: 10, marginTop: 4 }} size={22} color={'#fff'} />
                <Text style={{ color: '#fff', marginTop: 7, marginLeft: 4, fontFamily: 'gisha-font', fontSize: 12 }}>Message</Text>
              </TouchableOpacity>
            </View>

            <View style={{ height: 20 }}>

            </View>

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
  header: {
    flexDirection: 'row',
    height: '8%',
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#28b87a',
  },
  StarImage: {
    width: 17,
    height: 17,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 7,
    fontFamily: 'gisha-font',
    fontSize: 12
  },
  uncheck: {
    color: '#969696'
  },
  check: {
    color: '#28b87a'
  },
  filterbox: {
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

  cardview: {
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