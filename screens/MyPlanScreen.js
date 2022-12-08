/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles'
import { steps, screen, sleep, stepsGoal, screenGoal, sleepGoal, currentUser, currentPicture} from '../assets/components/homepagecomp/HomePageModel';


const Plan = createNativeStackNavigator();

function MyPlanScreen( {navigation}) {
    return (
        <View style={style.container}>
          <View style={style.header}>
            <View style={style.headerContent}>
                <Image style={style.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                <Text style={style.name}>{currentUser}</Text>
            </View>
          </View>

          <View style={styles.body}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Profile')}>
                <Text>Edit Profile</Text>  
              </TouchableOpacity>     
              
              <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Goals')}>
                <Text>Edit Goals</Text> 
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Health')}>
                <Text>Health Stats</Text> 
              </TouchableOpacity>
          </View>

        </View>
  );
};

const style = StyleSheet.create({
    header:{
      backgroundColor: "#05445E",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    name:{
      fontSize:22,
      color:"white",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:16,
      color:"white",
      fontWeight:'600',
    },
    item:{
      flexDirection : 'row',
    },
    infoContent:{
      flex:1,
      alignItems:'flex-start',
      paddingLeft:5
    },
    iconContent:{
      flex:1,
      alignItems:'flex-end',
      paddingRight:5,
    },
    icon:{
      width:30,
      height:30,
      marginTop:20,
    },
    info:{
      fontSize:18,
      marginTop:20,
      color: "#05445E",
    },
  });

export default MyPlanScreen;