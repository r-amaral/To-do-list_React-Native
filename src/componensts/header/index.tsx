import React from 'react';
import {Text, Image, View} from 'react-native';

const Header = () => (
  <View style={{marginTop: 45, marginLeft: 20}}>
    <Image
      style={{width: 70, height: 70, borderRadius: 100}}
      source={require('./assets/dog.jpg')}
    />
    <Text style={{fontSize: 16, color: '#FFFFFF', marginTop: 10}}>
      Good evening
    </Text>
  </View>
);

export default Header;
