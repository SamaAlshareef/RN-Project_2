import React from 'react';
import {StyleSheet,TextInput, View,Dimensions,Text, Button, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('screen').width;


const FPConfirmationScreen = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.loginContainer}>               
                    <TextInput
                        placeholder="Plese Enter Code"
                        placeholderTextColor="#97ABBF"
                        selectionColor="#7a85ff"
                        textAlignVertical="bottom"
                        style={styles.textInputStyle}     
                        />
                    <View style={{flexDirection:'row'}}>
                         <Text style={styles.textStyle}>Didn't get an email yet?</Text>
                         <TouchableOpacity>
                              <Text  style={styles.blueTextStyle}> Resend</Text>
                         </TouchableOpacity>
                        
                    </View>
                   
                         
            </View>
                    <View style={styles.buttonContainer}>
                        <LinearGradient colors={['#7787fc', '#5cb3fb'] }style={{borderRadius:15,elevation:2, height:50, width:250}}>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={{color:'#fff', textAlign:'center', fontSize:17, fontWeight:'bold'}}>Submit</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <TouchableOpacity onPress={()=>navigation.navigate("SignUpScreen")}>
                            <Text style={{paddingTop:30, textAlign:'center', color:'#7a85ff',fontSize:15}}> Create Account</Text>
                        </TouchableOpacity>
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
        color:'#97ABBF',
      },
    textStyle:{
        color:'#97ABBF',
        fontSize:13,
        paddingTop:10,
        paddingBottom:10
    },
    blueTextStyle:{
        color:'#7a85ff',
        fontSize:13,
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
  

export default FPConfirmationScreen;