import React from 'react';
import {StyleSheet,TextInput, View,Dimensions,Text, Button, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('screen').width;


const SignUpScreen = ({navigation})=>{
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.loginContainer}>               
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="#97ABBF"
                        selectionColor="#7a85ff"
                        textAlignVertical="bottom"
                        style={styles.textInputStyle}     
                        />
                     <TextInput
                        placeholder="Email"
                        placeholderTextColor="#97ABBF"
                        selectionColor="#7a85ff"
                        textAlignVertical="bottom"
                        style={styles.textInputStyle}     
                    />
                    <TextInput
                        placeholder="Phone Number"
                        placeholderTextColor="#97ABBF"
                        selectionColor="#7a85ff"
                        textAlignVertical="bottom"
                        style={styles.textInputStyle}     
                    />
                    <TextInput
                        placeholder="Enter Password"
                        placeholderTextColor="#97ABBF"
                        selectionColor="#7a85ff"
                        secureTextEntry= {true}
                        textAlignVertical="bottom"
                        style={styles.textInputStyle}     
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor="#97ABBF"
                        selectionColor="#7a85ff"
                        secureTextEntry= {true}
                        textAlignVertical="bottom"
                        style={styles.textInputStyle}     
                    />
            </View>
                    <View style={styles.buttonContainer}>
                        <LinearGradient colors={['#7787fc', '#5cb3fb'] }style={{borderRadius:15,elevation:2, height:50, width:250}}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate("SignInScreen")}}>
                                <Text style={{color:'#fff', textAlign:'center', fontSize:17, fontWeight:'bold'}}>Sign up</Text>
                            </TouchableOpacity>
                        </LinearGradient>
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
    loginContainer:{
        flex:2,
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
    },
    textInputStyle: {
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
       marginTop:50
    },
    buttonStyle:{
        height:50,
        justifyContent:'center',
        alignContent:'center'
    },
   
  });
  

export default SignUpScreen;