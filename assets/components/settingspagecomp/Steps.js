import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

export default function Steps(){
    const [selected, setSelected] = React.useState("");
  
    const data = [
        {key:'1', value:'Stop Tracking Steps'},
        {key:'2', value:'500 Steps'},
        {key:'3', value:'1000 Steps'},
        {key:'4', value:'2000 Steps'},
    ];

    return(
            <View>
                <Text style = {styles.text}>Notify From Steps Remaining:</Text>
                <SelectList style = {styles}
                    setSelected={setSelected} 
                    data={data}  
                    search={false} 
                    defaultOption={{key:'1', value:'Stop Tracking Steps'}}
                    dropdownTextStyles = {styles.choices}
                    inputStyles = {styles.choices}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#05445E', 
        fontSize: 15, 
        paddingLeft: 30,
        paddingTop: 30,
    },

    choices: {
        color: '#05445E',
        fontSize: 15,
        paddingLeft: 130,
        margin: 0
    },

    box: {
        margin: -15
    }
});