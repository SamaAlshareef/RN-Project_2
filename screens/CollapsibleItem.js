import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import Collapsible from 'react-native-collapsible';



const windowWidth = Dimensions.get('screen').width;
export default class CollapsibleItem extends Component {
  state = {
    collapsed: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const {container,header,headerText} = styles;
    const {title, moneyAmount,children} = this.props;
    return (
      <View style={container}>
        <ScrollView>
        <View style={styles.packagesContainer}>
            <View style={header}>
              <Text style={headerText}>{title}</Text>
              <TouchableOpacity onPress={this.toggleExpanded}>
                {
                    this.state.collapsed? <Image style={{marginLeft:5, marginTop:10}} source={require('../images/arrow.png')}/>:
                    <Image style={{marginLeft:5, marginTop:10, transform:[{ rotate: '180deg' }]}} source={require('../images/arrow.png')}/>
                }
                  
              </TouchableOpacity>
            </View>
            <Text style={{fontSize:30, color:'#203b72', marginLeft:20, marginBottom:10}}>{moneyAmount}</Text>
          <Collapsible collapsed={this.state.collapsed} align="center">
            {children}
          </Collapsible>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#f1f8ff',
    alignContent:'center',
    justifyContent:'center',
   
  },
  packagesContainer:{
    width:windowWidth-50,
    backgroundColor:"#fff",
    borderBottomWidth:0.2,
    borderBottomColor:'#f1f8f8',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    flexDirection:'row',
    marginLeft:10,
    marginTop:5
  },
  headerText: {
   fontSize:18, 
   color:'#7a85ff',
   marginLeft:10,
   marginBottom:5
  },
  
});