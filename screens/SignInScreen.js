import React from 'react';
import {StyleSheet,TextInput, View,Dimensions,Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const SignInScreen = ({navigation})=>{
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
                     <TextInput
                        placeholder="Password"
                        placeholderTextColor="#97ABBF"
                        selectionColor="#7a85ff"
                        textAlignVertical="bottom"
                        secureTextEntry= {true}
                        style={styles.textInputStyle}     
                    />
                    <TouchableOpacity onPress={()=>{navigation.navigate("FPScreen")}}>
                        <Text style={styles.textStyle}>Forget Password?</Text>
                    </TouchableOpacity>
                    
            </View>
                    <View style={styles.buttonContainer}>
                        <LinearGradient colors={['#7787fc', '#5cb3fb'] }style={{borderRadius:15,elevation:2, height:50, width:250}}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('HomeScreen')}>
                                <Text style={{color:'#fff', textAlign:'center', fontSize:17, fontWeight:'bold'}}>Sign in</Text>
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
    headerContainer:{
        alignContent:"center",
        justifyContent:'center',
        color:'#193870',
        flexDirection:'row'
    },
    hamburgerMenu:{
        alignContent:"flex-end",
        justifyContent:'flex-end',
    },
    loginContainer:{
        flex:1,
        alignContent:'center',
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
        flex:1,
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
  

export default SignInScreen;