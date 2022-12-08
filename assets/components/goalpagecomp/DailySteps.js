import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import GoalHeader from '../../components/goalpagecomp/GoalHeader'

export default function DailySteps(){
    const [number, setNumber] = React.useState(2000);
    const [inputValue, setInputValue] = React.useState('');
  
    return (
      <ScrollView>
  
        <GoalHeader name = "Change Daily Steps Goal"></GoalHeader>
        <TextInput onChangeText={(text) => setInputValue(text)} keyboardType="numeric"/>
        <TouchableOpacity onPress={() => setNumber(inputValue)}>
        <Text>Update Daily Steps</Text>
        </TouchableOpacity>
        <Text>Current: {number} Steps</Text>
  
      </ScrollView>
    );
}