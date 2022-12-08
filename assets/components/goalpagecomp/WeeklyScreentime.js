import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import GoalHeader from '../../components/goalpagecomp/GoalHeader'

export default function WeeklyScreentime(){
    const [number, setNumber] = React.useState(30);
    const [inputValue, setInputValue] = React.useState('');
  
    return (
      <ScrollView>
  
        <GoalHeader name = "Change Weekly Screentime Goal"></GoalHeader>
        <TextInput onChangeText={(text) => setInputValue(text)} keyboardType="numeric"/>
        <TouchableOpacity onPress={() => setNumber(inputValue)}>
        <Text>Update Weekly Screentime Hours</Text>
        </TouchableOpacity>
        <Text>Current: {number} Hours</Text>
  
      </ScrollView>
    );
}