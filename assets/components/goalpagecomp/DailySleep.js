import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import GoalHeader from '../../components/goalpagecomp/GoalHeader'
import { steps, screen, sleep, stepsGoal, screenGoal, sleepGoal, currentUser, currentPicture, setSleepGoal} from '../homepagecomp/HomePageModel';


export default function DailySleep(){
    const [inputValue, setInputValue] = React.useState('');

    return (
      <ScrollView>

        <GoalHeader name = "Change Daily Sleep Goal"></GoalHeader>
        <TextInput onChangeText={(text) => setInputValue(text)} keyboardType="numeric"/>
        <TouchableOpacity onPress={() => setSleepGoal(inputValue)}>
        <Text>Update Daily Sleep Hours</Text>
        </TouchableOpacity>
        <Text>Current: {sleepGoal} Hours of Sleep</Text>

      </ScrollView>
    );
}