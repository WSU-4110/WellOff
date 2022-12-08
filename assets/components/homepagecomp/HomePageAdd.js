/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import { db } from '../../../Firebase/firebase';
import {React, Component, useState, useEffect } from 'react';
import {Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Platform, Button} from 'react-native';
import render from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import { getDatabase, ref, child, get } from "firebase/database";


    export var Steps = 0;
    const dbRef = ref(getDatabase());


    export default function HomePageAdd() {
        get(child(dbRef, `Goals/Steps`)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              Steps = (snapshot.val());
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
          return Steps;
    };




