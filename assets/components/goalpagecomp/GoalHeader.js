import React, { Component } from 'react';
import { View, Text } from 'react-native';

import style from '../../../styles';

class GoalHeader extends Component {
    render() {
        return (
            <View style={style.sectionContainer}>
                <Text style={style.sectionTitle}>{this.props.name}</Text>
                {this.props.children}
            </View>
        );
    };
};

export default GoalHeader;