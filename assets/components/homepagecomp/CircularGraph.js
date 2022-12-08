/* eslint-disable no-trailing-spaces *//* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { ProgressChart } from "react-native-chart-kit";
import { stepsGraph, screenGraph, sleepGraph } from './HomePageModel';



const screenWidth = Dimensions.get("window").width;


var steps = 0.5;
var screen = 0.3;
var sleep = 0.2;
export default function CircularGraph() {
 
    const data = {
        labels: ["Steps", "Screen", "Sleep"], // optional
        data: [stepsGraph, screenGraph, sleepGraph]//
      };
      
        return (
          <View style={[styleSheet.MainContainer, styleSheet.elevation]}>
      <View>
            <ProgressChart
              data={data}
              width={ screenWidth - 15 }
              height={220}
              chartConfig={{
                //backgroundColor: '#478438',
                backgroundGradientFrom: '#95aeff',
                backgroundGradientTo: '#e1f7ff',
                //decimalPlaces: 2,
                color: (opacity = 1) => `rgba(85, 51, 255, ${opacity})`,
              }}
              style= {{
                borderRadius: 15,
              }}
            />
      </View>
          </View>
        );
      }
      
      const styleSheet = StyleSheet.create({
      
        MainContainer: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        },
        elevation: {
          shadowColor: '#220033',
          elevation: 80,
        },
      });