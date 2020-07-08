import React from 'react';
import {StyleSheet,TextInput, View,Dimensions,Text, Button, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('screen').width;


const FPScreen = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.loginContainer}>               
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#97ABBF"
                        selectionColor="#7a85ff"
                        textAlignVertical="bottom"
                        style={styles.textInputStyle}     
                        />
                         
            </View>
                    <View style={styles.buttonContainer}>
                        <LinearGradient colors={['#7787fc', '#5cb3fb'] }style={{borderRadius:15,elevation:2, height:50, width:250}}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate("FPConfirmationScreen")}}>
                                <Text style={{color:'#fff', textAlign:'center', fontSize:17, fontWeight:'bold'}}>Send</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                  

           
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:3,
        backgroundColor:"#f1f8ff"
    },
    loginContainer:{
        flex:1,
        alignContent:'flex-start',
        justifyContent:'center',
        alignSelf:'center',
        
    },
    textInputStyle: {
        alignSelf:'center',
        height: 60, 
        width:windowWidth -100,
        backgroundColor:'#f1f8ff',
        borderBottomWidth:2,
        borderBottomColor:"#a4b2ed",
        color:'#bdc3da',
      },
    textStyle:{
        color:'#97ABBF',
        fontSize:13,
        textDecorationLine:'underline',
        paddingTop:10,
        paddingBottom:10
    },
    buttonContainer:{
        flex:2,
        flexDirection:'column',
        alignContent:'flex-start',
        justifyContent:'flex-start',
        alignSelf:'center',
       
    },
    buttonStyle:{
        height:50,
        justifyContent:'center',
        alignContent:'center'
    },
   
  });
  

export default FPScreen;