import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import GoalHeader from '../../components/goalpagecomp/GoalHeader'
import { steps, screen, sleep, stepsGoal, screenGoal, sleepGoal, currentUser, currentPicture, setScreenGoal} from '../homepagecomp/HomePageModel';


export default function DailyScreentime(){
  const [inputValue, setInputValue] = React.useState('');
  
    return (
      <ScrollView>
  
        <GoalHeader name = "Change Daily Screentime Goal"></GoalHeader>
        
        <TextInput onChangeText={(text) => setInputValue(text)} keyboardType="numeric"/>
        <TouchableOpacity onPress={() => setScreenGoal(inputValue)}>
        <Text>Update Daily Screentime Hours</Text>
        </TouchableOpacity>
        <Text>Current: {screenGoal} Hours</Text>
  
      </ScrollView>
    );
}