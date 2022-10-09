import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header(){
    return(
        <View style = {styles.container}>
         <Text style = {styles.title}>  Reminders</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
      },
     
      title: {
         color: 'darkslateblue', 
         fontSize: 40,
         fontWeight: 'bold',
      },
});