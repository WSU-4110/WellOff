import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

export default function Hours(){
    const [selected, setSelected] = React.useState("");
  
    const data = [
        {key:'1', value:'Stop Tracking Hours'},
        {key:'2', value:'1 Hours'},
        {key:'3', value:'2 Hours'},
        {key:'4', value:'4 Hours'},
    ];

    return(
            <View>
                <Text style = {styles.text}>Notify From Hours Remaining:</Text>
                <SelectList style = {styles.choices}
                    setSelected={setSelected} 
                    data={data}  
                    search={false} 
                    defaultOption={{key:'1', value:'Stop Tracking Hours'}}
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
        paddingLeft: 135,
    }
});