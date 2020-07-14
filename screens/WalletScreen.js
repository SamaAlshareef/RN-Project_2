import React from 'react';
import {StyleSheet, View,Dimensions,Image,Text} from 'react-native';
import CollapsibleItem from './CollapsibleItem';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const WalletScreen = ({navigation})=>{

  const content = [
    {
      title: 'Aquatics',
      image:require('../images/aquatics.png'),
      content: "Mobile App",
      amount:"$721.00",
      deadline:"March"
    },
    {
      title: 'Mazera',
      image:require('../images/froneri.png'),
      content: "Mobile App",
      amount:"$361.00",
      deadline:"February"
      
    },
    {
      title: 'Froneri',
      image:require('../images/froneri.png'),
      content: "Website Development",
      amount:"$361.00",
      deadline:"February"
     
    },

  ];

    return(
        
     
      <View style={styles.container}>
       <ScrollView>
        <View style={styles.packagesContainer}>
            <CollapsibleItem title="Work Packages Balance" moneyAmount="$850.00" >
            {content.map((item) =>{
                return(
            <View key={item.title} style={styles.elevatedCards}>
                                <View style={{flexDirection:'row'}}>
                                    <Image style={{width:40,height:40, borderRadius:40/2,marginLeft:10, alignItems:'center'}} source={item.image}/>
                                    <View style={{flexDirection:'column'}}>
                                      <View style={{flexDirection:'row'}}>
                                        <Text style={{marginLeft:5, fontSize:12}} >{item.title}</Text>
                                        <Text style={{fontSize:12, color:'#7a85ff',fontWeight:'bold',marginLeft:70}}>{item.amount}</Text>
                                      </View>
                                      <View style={{flexDirection:'row'}}>
                                        <Text style={{marginLeft:5, color:'#97ABBF',fontSize:12}} >{item.content}</Text>
                                        <Text style={{fontSize:9, color:'#97ABBF', textAlign: 'right', flex:1}}>{item.deadline}</Text>
                                      </View>
                                    </View>
                                </View>
                            </View>
                )})}
            </CollapsibleItem>
            <CollapsibleItem title="Wallet Balance" moneyAmount="$250.00"/>
       
            </View>
          <View style={styles.packagesContainer}>
             <Text style={styles.headerText}>Latest Transactions</Text>
                <View style={styles.elevatedCards}>
                    <View style={{flexDirection:'row'}}>
                        <Image style={{width:40,height:40, borderRadius:40/2,marginLeft:20, alignItems:'center'}} source={require('../images/profilepic.png')} />
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row'}}>
                              <Text style={{marginLeft:10}} >Income</Text>
                              <Text style={{fontSize:12, color:'#7a85ff',fontWeight:'bold',marginLeft:70}}>$721.00</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                              <Text style={{marginLeft:10, color:'#97ABBF'}} >Emar Egypt</Text>
                              <Text style={{fontSize:12, color:'#97ABBF', marginLeft:50}}>March</Text>
                            </View>
                            </View>
                    </View>
                </View>
                <View style={styles.elevatedCards}>
                    <View style={{flexDirection:'row'}}>
                        <Image style={{width:40,height:40, borderRadius:40/2,marginLeft:20, alignItems:'center'}} source={require('../images/profilepic.png')} />
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row'}}>
                              <Text style={{marginLeft:10}} >Income</Text>
                              <Text style={{fontSize:12, color:'#7a85ff',fontWeight:'bold',marginLeft:70}}>$361.00</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                              <Text style={{marginLeft:10, color:'#97ABBF'}} >O-projects</Text>
                              <Text style={{fontSize:12, color:'#97ABBF', marginLeft:50}}>February</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity  style={{alignItems:'flex-end', margin:10}}>
                  <Text style={{fontSize:12, color:'#7a85ff',textDecorationLine:'underline'}}>Check more</Text>
                </TouchableOpacity>
          </View>
        </ScrollView>     
    </View>
   
              
    
           
        
    );
};

const styles = StyleSheet.create({
  container: {
    flex:3,
    backgroundColor:"#f1f8ff",
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
    marginBottom:10,
    alignSelf:'center'
},
cardsContainer:{
  flex:3,
  justifyContent:'center',
  alignItems:'center'
},
packagesContainer:{
  marginTop:20,
  width:windowWidth-50,
  borderRadius:20,
  backgroundColor:"#fff",
  paddingBottom:20,
  marginBottom:10
},
headerText: {
  fontSize:18, 
  color:'#7a85ff',
  marginTop:20,
  marginBottom:20,
  marginLeft:20
 },
 listsContainer:{
   backgroundColor:'#fff',
   width:windowWidth-50,
   borderRadius:20
 }
 
});

export default WalletScreen;