import React from 'react';
import {
    View,
    Text, 
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Dimensions

} from 'react-native';
import {default as MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import {default as Octicons} from 'react-native-vector-icons/Octicons';
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';
import {default as FontAwesome5} from 'react-native-vector-icons/FontAwesome5';


const DarkBlue = "#20295B";
const Gray = "#CBCBCB";
const LightGray = "#dbdbdb";
const DarkGray = "#848484";


const count = [1,2,3,4,5]


const Items = (name, image) =>{
    return(
        <View style={{padding:20, width:Dimensions.get('window').width/2}}>
        <>
        <TouchableOpacity>
        <Image source={image == null? require('../Images/camera.jpeg'):{uri: image}} style={{width:'100%', height:120,resizeMode:'cover', borderRadius:10}} />
        <Text style={{fontSize:18, paddingTop:5, alignSelf:'center'}}>
            {name}
        </Text>
        </TouchableOpacity>
        </>
        </View>
    )
}


export default class ViewAll extends React.Component{
    static navigationOption= {
        header:null
    };
    constructor(props){
        super(props);
        this.state = {
            Packages:[],
            Others:[],
            Category:[]
        }
    }
    componentWillMount(){
        this.type = this.props.navigation.getParam('type', '');
        if(this.type == "package"){
            this.getAllPackages()
        }
        else if(this.type == "all"){
            this.apiRequest()
        }
        else{
            this.getChildByName(this.type)
        }
    }
    getAllPackages(){
        fetch('http://distance123.com/rentree/index.php/api/all_package',{
            method:'GET',
            headers:{
                'Accept':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((responseJson)=>{
            let allpac = responseJson.allPackage;
            this.setState({Packages: allpac})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    apiRequest(){
        fetch('http://distance123.com/rentree/index.php/api/all_chalid_categires/',{
            method:'GET',
            headers:{
                'Accept':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((responseJson)=>{
            let child_cats = responseJson.DataList;
            this.setState({Category:child_cats})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    getChildByName(name){
        fetch('http://distance123.com/rentree/index.php/api/chalidCategiresByMainCategory?Name='+name,{
            method:'GET',
            headers:{
                'Accept':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((responseJson)=>{
            let child;
            if(this.type == "Mobile")
                child = responseJson.DataList[0].Child;
            else  if(this.type == "Home")
                child = responseJson.DataList["1"].Child;
            else  if(this.type == "Parent Category")
                child = responseJson.DataList["2"].Child;
            this.setState({Others: child})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <View>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>

                {/* Header section */}
                <View style={Styles.header}>
                    <TouchableOpacity style={Styles.menuContainer} onPress={()=>this.props.navigation.goBack()}>
                    <MaterialCommunityIcons name={"arrow-left"} size={40} color={DarkBlue} />
                    </TouchableOpacity>
                    <View style={Styles.searchContainer}>
                    <View style={Styles.searchInnerContainer}>
                        <View style={{flexDirection:'row'}}>
                            <View style={Styles.searchIconContainer}>
                            <Octicons name={"search"} size={26} color={DarkGray} />
                            </View>
                            <View style={Styles.searchInputContainer}>
                            <TextInput placeholder={"Search"} style={{fontSize:18}} />
                            </View>
                            <View
                            style={{
                                flex:0.15
                            }}>
                            </View>
                        </View>
                    </View>
                    </View>
                    <View style={Styles.NotificationContainer}>
                        <TouchableOpacity style={{padding:10}}>
                            <FontAwesome name={"bell-o"} size={30} color={DarkBlue} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Header section */}
                <ScrollView>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    {
                        this.type == "package"? 
                            this.state.Packages.map(i => Items(i.package_name, i.image))
                        :
                        (this.type == "all")?
                            this.state.Category.map(i => Items(i.Name, null))
                        :
                            this.state.Others.map(i => Items(i.Name, i.Image))
                    }
                    </View>
                </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}


const Styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height:70,
        borderBottomColor: LightGray,
        borderBottomWidth:1,
        backgroundColor:'#fff'
    },
    menuContainer:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    searchContainer:{
        flex:3, 
        justifyContent:'center'
    },
    searchInnerContainer:{
        height:40, 
        borderColor: Gray, 
        borderWidth:1, 
        borderRadius:20,
        justifyContent:'center'   
    },
    searchIconContainer:{
        padding:10, 
        flex:0.15
    },
    searchInputContainer:{
        alignItems:'center', 
        flex:1
    },
    NotificationContainer:{
        flex:1, 
        // height:100, 
        justifyContent:'center', 
        alignItems:'center'
    },
    packageContainer:{
        width:130
    },
    packageImage:{
        width:130,
        height:130, 
        resizeMode:'cover', 
        borderRadius:10,
        borderWidth: 1,
        borderColor: DarkGray
    },
    packageTitleContainer:{
        borderRadius:25, 
        borderWidth:2, 
        borderColor: Gray, 
        height:25, 
        justifyContent:'center', 
        alignItems:'center'
    },
    packageTitle:{
        fontSize:14
    },
    packageDetails:{
        paddingTop:10,
        fontSize:12
    },


    packagesContainer:{
        padding:10, 
        paddingTop:20,
        flexDirection:'row'
    },
    packagesTitle:{
        fontSize:24,
        fontWeight: '400'
    },
    packagesSlogan:{
        fontSize:16,
        fontWeight: '500',
        color: DarkGray
    },
    ViewAllContainer:{
        flex:0.3, 
        justifyContent:'center', 
        alignContent:'center'
    },
    ViewAllInner:{
        height:30, 
        borderColor: DarkBlue, 
        borderRadius:10, borderWidth:2, 
        justifyContent:'center', 
        alignItems:'center'
    },
    ViewAllText:{
        color: DarkGray, 
        fontSize:16
    },
    SeeMoreContainer:{
        height:120, 
        borderColor: 
        DarkBlue, 
        borderWidth:2, 
        borderRadius:10, 
        justifyContent:'center', 
        alignItems:'center'
    },
    SeeMoreIconContainer:{
        height:40, 
        width:40, 
        borderRadius:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderColor: DarkBlue, 
        borderWidth:3
    },
    SeeMoreTitle:{
        paddingTop:5, 
        color:DarkBlue, 
        fontSize:14
    }
})