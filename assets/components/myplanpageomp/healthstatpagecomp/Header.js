import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header(){
    return(
        <View style = {styles.container}>
         <Text style = {styles.title}>  Health Stats</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#75E6DA',
        justifyContent: 'center',
      },
     
      title: {
         color: '#05445E', 
         fontSize: 40,
         fontWeight: 'bold',
      },
});