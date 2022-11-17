import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

export default function NightMode(){
    const [selected, setSelected] = React.useState("");
  
    const data = [
        {key:'1', value:'Notifications Turned Off'},
        {key:'2', value:'Turned Off Until 7:00am'},
        {key:'3', value:'Turned Off Until 9:00am'},
        {key:'4', value:'Turned Off Until 11:00am'},
    ];

    return(
            <View>
                <Text style = {styles.text}>Night-Mode</Text>
                <SelectList style = {styles.choices}
                    setSelected={setSelected} 
                    data={data}  
                    search={false} 
                    defaultOption={{key:'1', value:'Notifications Turned Off'}}
                    dropdownTextStyles = {styles.choices}
                    inputStyles = {styles.choices}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#05445E', 
        fontSize: 20,
        paddingTop: 60,
        paddingLeft: 20,
        fontWeight: 'bold',
        },

    choices: {
        color: '#05445E',
        fontSize: 15,
        paddingLeft: 100,
    }
});