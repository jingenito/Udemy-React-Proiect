import React from 'react';
import { StyleSheet, Text, View, CheckBox } from 'react-native';

export default function MyList(){

  return(
    <View style={styles.container}>
      
    </View>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e1e1e',
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    itemCard: {
      backgroundColor: "fff", 
      borderRadius: "0.8em", 
      boxShadow:'1px 2px 9px #000', 
      width: "25em", 
      padding: "1em", 
      margin: "1em"
    }
  });