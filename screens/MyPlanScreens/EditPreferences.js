import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Alert
} from 'react-native';

export default class Users extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  description:"View Daily Highlights", color:"#75E6DA", completed:0},
        {id:2,  description:"Reset Daily Goals",   color:"#189AB4", completed:0},
        {id:3,  description:"Stop Daily Recomendations",  color:"#75E6DA", completed:0},
        {id:4,  description:"Share With Friends", color:"#189AB4", completed:0},
        {id:5,  description:"Show Health Data", color:"#75E6DA", completed:0},
        {id:4,  description:"Update Health Proile", color:"#189AB4", completed:0},
         {id:4,  description:"Update Health Proile", color:"#75E6DA", completed:0},
      ]
    };
  }

  clickEventListener = (item) => {
    Alert.alert("Item selected ")
  }
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  

  __getCompletedIcon = (item) => {
    if(item.completed == 1) {
      return "https://img.icons8.com/flat_round/64/000000/checkmark.png";
    } else {
      return "https://img.icons8.com/flat_round/64/000000/delete-sign.png";
    }
  }

  __getDescriptionStyle = (item) => {
    if(item.completed == 1) {
      return {textDecorationLine:"line-through", fontStyle:'italic', color:"#808080"};
    }
  } 

  render() {
    return (
      <View style={styles.container}>
      
        <FlatList 
          style={styles.tasks}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: this.__getCompletedIcon(item)}}/>
              <View style={styles.cardContent}>
                <Text style={[styles.description, this.__getDescriptionStyle(item)]}>{item.description}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:6,
    marginTop:16,
    backgroundColor:"#05445E"
  },
  tasks:{
    flex:1,
  },
  cardContent: {
    marginLeft:2,
    marginTop:10,
    alignContent : 'center',
  },
  image:{
    width:25,
    height:25,
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 9,
      alignContent : 'center',
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
alignContent : 'center',
    marginVertical: 13,
    marginHorizontal:11,
    backgroundColor:"#D4F1F4",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row',
    flexWrap: 'wrap',
    borderLeftWidth:6,
  },

  description:{
    fontSize:20,
    flex:1,
    color:"#008080",
    fontWeight:'bold',
    alignContent : 'center',
  },
 
}); 