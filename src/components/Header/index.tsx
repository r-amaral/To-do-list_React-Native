import React from 'react';
import {Text, Image, View} from 'react-native';
import {styles} from './styled';

const Header = () => (
  <View style={styles.headerContainer}>
    <Image style={styles.headerImage} source={require('./assets/dog.jpg')} />
    <Text style={styles.headerText}>Good evening</Text>
  </View>
);

export default Header;
