import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import GoalHeader from '../components/goalpagecomp/GoalHeader'
import { steps, screen, sleep, stepsGoal, screenGoal, sleepGoal, currentUser, currentPicture} from '../homepagecomp/HomePageModel';


export default function ProfileNameComp(){
    const [number, setNumber] = React.useState(5);
    const [inputValue, setInputValue] = React.useState('');

    return (
      <ScrollView>

        <GoalHeader name = "Change Name"></GoalHeader>
        <TextInput onChangeText={(text) => setInputValue(text)}/>
        <TouchableOpacity onPress={() => setNumber(inputValue)}>
        <Text>Update New Name</Text>
        </TouchableOpacity>
        <Text>Current: {number}</Text>

      </ScrollView>
    );
}