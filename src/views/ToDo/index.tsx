import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  StyleSheet,
} from 'react-native';

import Header from '../../componensts/header';
import Task from '../../componensts/task';

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
          <Task />
          <Task />
          <Task />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerTask: {
    backgroundColor: 'rgba(0, 0, 0, 0.96)',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    gap: 20,
  },
  title: {
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    fontSize: 30,
  },
  backTheme: {
    backgroundColor: 'rgba(0, 0, 0, 0.96)',
  },
});

export default ToDo;
