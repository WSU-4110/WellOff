 import React from 'react';
 import {Text, View} from 'react-native';
 import Ionic from "react-native-vector-icons/FontAwesome"
 import {NavigationContainer} from "@react-navigation/native"
 import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
 import HomeScreen from './screens/HomeScreen';
 import MyPlanScreen from './screens/MyPlanScreen';
 import SettingsScreen from './screens/SettingsScreen';
 import ReminderScreen from './screens/MyPlanScreens/RemindersScreen'
 import HealthScreen from './screens/MyPlanScreens/HealthScreen';

 const App = () => {
  const Tab = createBottomTabNavigator()
   return (
     <NavigationContainer>
      <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          height: 80,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if(route.name === 'Home'){
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }
          else if(route.name === 'My Plan'){
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }
          else if(route.name === 'Settings'){
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }
          else if(route.name === 'Reminders'){
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }
          else if(route.name === 'Health'){
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
      })}>
      
        <Tab.Screen name ="Home" component = {HomeScreen}/>
        <Tab.Screen name ="My Plan" component = {MyPlanScreen}/>
        <Tab.Screen name ="Reminders" component = {RemindersScreen}/>
        <Tab.Screen name ="Settings" component = {SettingsScreen}/>
        <Tab.Screen name ="Reminders" component = {ReminderScreen}/>
        <Tab.Screen name ="Health" component = {HealthScreen}/>
      </Tab.Navigator>
     </NavigationContainer>
   );
 };
 
 export default App;