import React from 'react';
import {
  View,
  Modal,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import IconClock from 'react-native-vector-icons/AntDesign';

import {styles} from './styled';
import {ModalPropsContext} from '../../views/ToDo';

const ModalTask = () => {
  const [describe, setDescribe] = React.useState<string>('');
  const [timeModal, setTimeModal] = React.useState<boolean>(false);

  const {modalVisible, setModalVisible} = React.useContext(ModalPropsContext);

  const getTimeModal = () => (
    <DateTimePicker
      testID="dataTimePicker"
      value={new Date()}
      mode={'time'}
      is24Hour={true}
      display="default"
      onChange={() => setTimeModal(false)}
    />
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.ModalContainer}>
        <View style={styles.ModalView}>
          <View style={styles.ModalElements}>
            <TextInput
              placeholder="description"
              style={styles.TextInput}
              onChangeText={setDescribe}
              value={describe}
            />
            <View style={styles.TimeContainer}>
              <Text style={styles.TimeText}>Select the time</Text>
              <TouchableOpacity onPress={() => setTimeModal(true)}>
                <IconClock name="clockcircle" size={30} color="#5F33E1" />
              </TouchableOpacity>
            </View>
            <Button
              title="Finish"
              color="#5F33E1"
              onPress={() => setModalVisible(false)}
            />
          </View>
          {!!timeModal && getTimeModal()}
        </View>
      </View>
    </Modal>
  );
};

export default ModalTask;
