import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.appHeaderContainer}>
      <Text style={styles.appHeaderStyle}> School Attendence App</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  appHeaderContainer:{
    backgroundColor: 'blue'
  },
    appHeaderStyle:{
      color:'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 25,
      fontFamily: 'arial',
      padding: 20
    }  
})