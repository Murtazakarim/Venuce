import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { default as FontAwesome } from 'react-native-vector-icons/FontAwesome';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts = {
  'gisha-font': require('../assets/font/gisha.ttf')
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Sidebar extends Component {
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



  componentDidMount = async () => {
    this._loadFontsAsync();
  }



  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <View style={{ width: windowWidth / 1.5, paddingTop: 30, backgroundColor: '#28b87a', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: windowHeight / 7, width: windowWidth / 1.5 }}>
              <Image style={styles.tinyLogo} source={require('../Images/slidelogo.png')}></Image>
            </View>
            <Text style={styles.name} >Nasir Abbasi</Text>
          </View>



          <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignContent: 'center', marginTop: 12, marginLeft: 3 }} onPress={() => this.props.navigation.navigate("Favourites")}>
            <FontAwesome name={"heart-o"} style={{ marginLeft: 10 }} size={23} color={'black'} />
            <Text style={{ paddingLeft: 10, paddingTop: 4, fontFamily: 'gisha-font', color: 'black', fontWeight: '500' }}>Favorites</Text>
          </TouchableOpacity>

          <View style={{flex: 0.3}}/>
          <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignContent: 'center',  marginLeft: 3 }} onPress={() => this.props.navigation.navigate("SearchSave")}>
            <FontAwesome name={"bookmark-o"} style={{ marginLeft: 10 }} size={25} color={'black'} />
            <Text style={{ paddingLeft: 15, paddingTop: 4, color: 'black', fontFamily: 'gisha-font', fontWeight: '500' }}>Save searches</Text>
          </TouchableOpacity>
          <View style={{flex: 0.3}}/>
          <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignContent: 'center', marginLeft: 3 }} onPress={() => this.props.navigation.navigate("Setting")}>
            <FontAwesome name={"sliders"} style={{ marginLeft: 10 }} size={25} color={'black'} />
            <Text style={{ paddingLeft: 10, paddingTop: 4, fontFamily: 'gisha-font', color: 'black', fontWeight: '500' }}>Settings</Text>
          </TouchableOpacity>
          <View style={{flex: 0.3}}/>
          <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignContent: 'center',  marginLeft: 3 }} onPress={() => this.props.navigation.navigate("About")}>
            <Image style={{ width: 30, marginLeft: 3, height: 30 }} source={require('../Images/about.png')}></Image>
            <Text style={{ paddingLeft: 10, paddingTop: 7, fontFamily: 'gisha-font', color: 'black', fontWeight: '500' }}>About us</Text>
          </TouchableOpacity>
          <View style={{flex: 0.4}}/>
          <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignContent: 'center', marginLeft: 5 }} onPress={() => this.props.navigation.navigate("SignIn")}>
            <FontAwesome name={"sign-out"} style={{ marginLeft: 10 }} size={25} color={'black'} />
            <Text style={{ paddingLeft: 6, paddingTop: 5, fontFamily: 'gisha-font', color: 'black', fontWeight: '500' }}>Logout</Text>
          </TouchableOpacity>
          <View style={{ flex: 6 }}></View>
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
    width: windowWidth / 1.5,
  },

  name: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "800",
    marginVertical: 8,
    fontFamily: 'gisha-font',
    alignSelf: 'center'
  },

  tinyLogo: {
    width: windowHeight / 4,
    height: windowHeight / 10,
    alignSelf: 'center'
  }
});