import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native';
import AddViewContainer from './src/containers/AddViewContainer';
import TaskListContainer from './src/containers/TaskListContainer';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import taskListReducer from './src/reducers/TaskListReducer';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// Store

const store = createStore( 
  combineReducers({ 
    taskList: taskListReducer 
  })
);



export default class Todo extends Component {

  render() {
    return (
      <Provider store={ store } >
        <View style={ styles.container }>
          <AddViewContainer />
          <TaskListContainer />
        </View>  
      </Provider>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE'
  }
});
