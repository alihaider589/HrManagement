import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native';

const Header =(props)=>{
  return (
<View style={styles.container}>

    <Text style={{fontSize:20,alignSelf:"center",marginLeft:'30%'}}>{props.headerText}</Text>
    <TouchableOpacity onPress={props.onPress}>
    <Text>{props.Righttext}</Text>
    </TouchableOpacity> 
  
</View>
)}

const styles = StyleSheet.create({
  container: {
flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal:10,
    alignContent:'center',
    height:60,
    backgroundColor:'#f8f8f8',
    width:'100%',
    shadowColor:'#000',
    paddingTop:15,
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.3,
    elevation:4,
  },
});
export default Header