import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import GoalHeader from '../../assets/components/goalpagecomp/GoalHeader';
import DailySteps from '../../assets/components/goalpagecomp/DailySteps';
import WeeklyScreentime from '../../assets/components/goalpagecomp/WeeklyScreentime';
import WeeklySteps from '../../assets/components/goalpagecomp/WeeklySteps';
import DailyScreentime from '../../assets/components/goalpagecomp/DailyScreentime';

const GoalScreen = () => {
  const [number, setNumber] = React.useState(500);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <ScrollView>

      <DailySteps/>
      <DailyScreentime/>
      <WeeklySteps/>
      <WeeklyScreentime/>
      
    </ScrollView>
  );
};

export default GoalScreen;