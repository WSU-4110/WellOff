/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import Ionic from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MyPlanScreen from './screens/MyPlanScreen';
import SettingsScreen from './screens/SettingsScreen';
import HealthScreen from './screens/MyPlanScreens/HealthScreen';
import RemindersScreen from './screens/MyPlanScreens/RemindersScreen'
import ProfileScreen from './screens/MyPlanScreens/EditProfile'
import PreferencesScreen from './screens/MyPlanScreens/EditPreferences'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#000000',
        height: 80,
      },
      headerShown: false,
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'My Plan') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'Reminders') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'Health') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        }
        return <Ionic name={iconName} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Plan" component={MyPlanScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={({route}) => ({      
        headerShown: true,
        })}>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Preferences" component={PreferencesScreen} />
        <Stack.Screen name="Health" component={HealthScreen} />
        <Stack.Screen name="Notification" component={RemindersScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
