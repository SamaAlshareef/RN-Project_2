import React from 'react';
import {StyleSheet,TextInput, View,Dimensions,Text, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const HomeScreen = ({navigation})=>{
    const content = [
        {
          title: 'Aquatics',
          image:require('../images/aquatics.png'),
          content: "Mobile App",
          amount:"$1000.00",
          deadline:"March 10"
        },
        {
          title: 'Mazera',
          image:require('../images/froneri.png'),
          content: "Mobile App",
          amount:"$1000.00",
          deadline:"January 30"
          
        },
        {
          title: 'Froneri',
          image:require('../images/froneri.png'),
          content: "Website Development",
          amount:"$1000.00",
          deadline:"May 20"
         
        },
    
      ];
    return(
        <ScrollView style={{backgroundColor:"#f1f8ff"}}>
            <View style={styles.container}>  
                <View  style={styles.profileContainer}>
                    <TouchableOpacity>
                        <Image style={{width:20,height:20, marginLeft:60}} source={require('../images/edit.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image style={styles.profilePic} source={require('../images/profilepic.png')}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:25, color:'#203b72',fontWeight:'bold'}}> Oprojects</Text>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={{textAlign:'center', fontSize:15, color:'#fff' }}> Work invitations</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardsContainer}>
                    <View style={styles.walletCard}>
                        <Text style={{fontSize:18, color:'#7a85ff',marginLeft:10}}> Wallet Balance</Text>
                        <View style={{flexDirection:'row',marginLeft:10}}>
                            <Text style={{fontSize:30, color:'#203b72'}}>$1,250.00</Text>
                            <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={()=>navigation.navigate("WalletScreen")}> 
                                <Image style={{width:50,height:50,borderWidth:1, borderColor:'#b5c8ea', borderRadius:50/2,marginLeft:100}} source={require('../images/wallet.png')}/>
                            </TouchableOpacity> 
                        </View>
                        <Text style={{fontSize:10, color:'#7c7c7c',marginLeft:10}}> All Work Packages*</Text>
                    </View>
                    <View style={styles.packagesContainer}>
                        <Text style={{fontSize:15, color:'#7a85ff',marginLeft:10,marginTop:5}}> Work Packages</Text>
                        {content.map((item) =>{
                         return(
                        <View key={item.title} style={styles.elevatedCards}>
                            <View style={{flexDirection:'row'}}>
                            <Image style={{width:40,height:40, borderRadius:40/2,marginLeft:10, alignItems:'center'}} source={item.image}/>
                                <View style={{flexDirection:'column',marginLeft:10}}>
                                    <Text>{item.title}</Text>                  
                                    <Text style={{fontSize:10, color:'#7c7c7c'}}>{item.content}</Text>
                                    <View style={{flexDirection:'row'}}>
                                         <Text style={{fontSize:10, color:'#7c7c7c'}}>Deadline </Text>
                                         <Text style={{fontSize:10, color:'#02dbdb'}}>{item.deadline}</Text>
                                         <Text style={{fontSize:10, color:'#7a85ff', marginLeft:30}}>{item.amount}</Text>   
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image style={{width:20,height:20}} source={require('../images/next.png')}/>
                                    </TouchableOpacity>
                            </View>
                        </View>
                         )})}
                     
                         
                    </View>
                </View>
              
                
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:3,
        backgroundColor:"#f1f8ff"
    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    profilePic:{
        width:50,
        height:50,
        borderRadius:50/2   
    },
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:120,
        height:30,
        borderRadius:20,
        backgroundColor:'#7a85ff',
        marginTop:10
    },
    walletCard:{
        marginTop:40,
        height:100,
        width:windowWidth-50,
        borderRadius:20,
        backgroundColor:"#fff",
        justifyContent:'center',
        
    },
    packagesContainer:{
        marginTop:20,
        height:320,
        width:windowWidth-50,
        borderRadius:20,
        backgroundColor:"#fff",
        
    },
    cardsContainer:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    elevatedCards:{
        width:windowWidth-100,
        height:70,
        justifyContent:'center',
        backgroundColor:'#fff',
        borderRadius:20,
        elevation:10,
        marginTop:20,
        alignSelf:'center'
    }
  
   
  });
  

export default HomeScreen;