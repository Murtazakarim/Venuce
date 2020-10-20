import React, { Component } from 'react';
import {Dimensions} from "react-native"
import {createDrawerNavigator} from 'react-navigation-drawer' 
import {createAppContainer } from "react-navigation";
import SignIn from './Screen/SignIn'
import SignUp from './Screen/SignUp'
import Sidebar from './Screen/SideBar'
import Banquets from './Screen/Banquets'
import Dashboard from "./Screen/dashboard"
import Details from "./Screen/Details"
import Forgot from './Screen/ForgotPassword'
import Setting from './Screen/Setting'
import Favourites from './Screen/Favourites'
import About from './Screen/About'
import SearchSave from './Screen/SearchSave'
const windowWidth =  Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Drawer = createDrawerNavigator(
  {
    SignIn: {screen: SignIn},
    SignUp: {screen: SignUp},
    Dashboard: {screen: Dashboard},
    Banquets: {screen: Banquets},
    Details: {screen: Details},
    Forgot: {screen: Forgot},
    Setting: {screen: Setting},
    Favourites: {screen: Favourites},
    About: {screen: About},
    SearchSave: {screen: SearchSave}
  },
  {
    initialRouteName: "SignIn",
    // drawerWidth = windowWidth/1.5,
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    drawerWidth: windowWidth/1.5,
    contentComponent: props => <Sidebar {...props} />
  }
  
);

const AppContainer = createAppContainer(Drawer);

export default AppContainer
 