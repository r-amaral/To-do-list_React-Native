import React from 'react';
import {styles} from './styles';
import {View, TouchableOpacity} from 'react-native';
import IconCheckMark from 'react-native-vector-icons/Ionicons';
import IconClipBoard from 'react-native-vector-icons/FontAwesome5';
import IconBookClock from 'react-native-vector-icons/MaterialCommunityIcons';
import {ModalPropsContext} from '../../views/ToDo';

const MenuTask = () => {
  const {setModalVisible} = React.useContext(ModalPropsContext);

  return (
    <View style={styles.MenuContainer}>
      <View style={styles.IconContainer}>
        <TouchableOpacity>
          <IconBookClock name="book-clock-outline" size={40} color="#5F33E1" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <IconCheckMark name="add-circle" size={60} color="#5F33E1" />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconClipBoard name="clipboard-list" size={40} color="#5F33E1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuTask;
