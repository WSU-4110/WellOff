import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import GoalHeader from '../../components/goalpagecomp/GoalHeader'
import { steps, screen, sleep, stepsGoal, screenGoal, sleepGoal, currentUser, currentPicture, setStepGoal} from '../homepagecomp/HomePageModel';


export default function DailySteps(){
    const [inputValue, setInputValue] = React.useState('');
  
    return (
      <ScrollView>
  
        <GoalHeader name = "Change Daily Steps Goal"></GoalHeader>
        <TextInput onChangeText={(text) => setInputValue(text)} keyboardType="numeric"/>
        <TouchableOpacity onPress={() => setStepGoal(inputValue)}>
        <Text>Update Daily Steps</Text>
        </TouchableOpacity>
        <Text>Current: {stepsGoal} Steps</Text>
  
      </ScrollView>
    );
}