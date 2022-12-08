/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, ScrollView, NativeModules } from 'react-native';
import SettingsToggle from '../assets/components/settingspagecomp/SettingToggle';
import SettingsHeader from '../assets/components/settingspagecomp/SettingHeader';
import DropDown from '../assets/components/DropDown';
import Button from '../assets/components/Button';

import Notification from '../assets/components/settingspagecomp/Notifications';
import WeeklyReport from '../assets/components/settingspagecomp/WeeklyReport';
import Steps from '../assets/components/settingspagecomp/Steps'; 
import Hours from '../assets/components/settingspagecomp/Hours';
import NightMode from '../assets/components/settingspagecomp/NightMode';

import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';

const setGoogleFit = (value) => {
    fetch('http://localhost:8081/api/AppSettings.js/set-google-fit-status', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          enabled: value
        })
      });
};

const googleFitStatus = () => {
    fetch("http://localhost:8081/api/AppSettings.js/google-fit-status", {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    .then((json) => {
      return json.status;})
}

export default function SettingsScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <SettingsHeader name="Notifications"></SettingsHeader>
                <Notification/>
                <WeeklyReport/>
                <Steps/>
                <Hours/>
                <NightMode/>
                <SettingsHeader name="Permissions">
                    <SettingsToggle name="Health" value={googleFitStatus}/>
                    <SettingsToggle name="Location" />
                </SettingsHeader>
                <SettingsHeader name="Admin Panel">
                    <SettingsToggle name="Dev Mode" />
                    <SettingsToggle name="Manual entry" />
                    <Button name="Reset" backgroundColor="#05445E" color="white"/>
                </SettingsHeader>
            </ScrollView>
        </SafeAreaView>
    );
};