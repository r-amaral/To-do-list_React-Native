import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import IconCheckMark from 'react-native-vector-icons/Ionicons';
import IconClipBoard from 'react-native-vector-icons/FontAwesome5';
import IconBookClock from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuTask = () => {
  return (
    <View style={styles.MenuContainer}>
      <IconBookClock name="book-clock-outline" size={40} color="#5F33E1" />
      <IconClipBoard name="clipboard-list" size={40} color="#5F33E1" />
      <IconCheckMark
        name="checkmark-done-circle-outline"
        size={40}
        color="#5F33E1"
      />
    </View>
  );
};

export default MenuTask;
