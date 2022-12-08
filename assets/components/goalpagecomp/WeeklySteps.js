import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import GoalHeader from '../../components/goalpagecomp/GoalHeader'

export default function WeeklySteps(){
    const [number, setNumber] = React.useState(10000);
    const [inputValue, setInputValue] = React.useState('');
  
    return (
      <ScrollView>
  
        <GoalHeader name = "Change Weekly Steps Goal"></GoalHeader>
        <TextInput onChangeText={(text) => setInputValue(text)} keyboardType="numeric"/>
        <TouchableOpacity onPress={() => setNumber(inputValue)}>
        <Text>Update Weekly Steps</Text>
        </TouchableOpacity>
        <Text>Current: {number} Steps</Text>
  
      </ScrollView>
    );
}