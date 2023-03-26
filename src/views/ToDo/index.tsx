import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from '../../components/Header';
import MenuTask from '../../components/MenuTask';
import Task from '../../components/Tasks';

import {styles} from './styled';

const ToDo = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.backTheme}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backTheme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Header />
        <Text style={styles.title}>To Do</Text>
        <View style={styles.containerTask}>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </View>
      </ScrollView>
      <MenuTask />
    </SafeAreaView>
  );
};

export default ToDo;
