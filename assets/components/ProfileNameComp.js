import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import GoalHeader from '../components/goalpagecomp/GoalHeader'
import { steps, screen, sleep, stepsGoal, screenGoal, sleepGoal, currentUser, currentPicture, setUserName} from '../components/homepagecomp/HomePageModel';


export default function ProfileNameComp(){
    const [inputValue, setInputValue] = React.useState('');

    return (
      <ScrollView>

        <GoalHeader name = "Change Name"></GoalHeader>
        <TextInput onChangeText={(text) => setInputValue(text)}/>
        <TouchableOpacity onPress={() => setUserName(inputValue)}>
        <Text>Update New Name</Text>
        </TouchableOpacity>
        <Text>Current: {currentUser}</Text>

      </ScrollView>
    );
}