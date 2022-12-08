import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import DailySteps from '../../assets/components/goalpagecomp/DailySteps';
import DailyScreentime from '../../assets/components/goalpagecomp/DailyScreentime';
import DailySleep from '../../assets/components/goalpagecomp/DailySleep';

const GoalScreen = () => {
  const [number, setNumber] = React.useState(500);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <ScrollView>

      <DailySteps/>
      <DailyScreentime/>
      <DailySleep/>

    </ScrollView>
  );
};

export default GoalScreen;