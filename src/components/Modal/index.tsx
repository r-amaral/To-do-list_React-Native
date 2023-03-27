import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import IconClock from 'react-native-vector-icons/AntDesign';
import IconExit from 'react-native-vector-icons/Ionicons';

import {
  View,
  Modal,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

import {ModalPropsContext} from '../../views/ToDo';
import {TaskContext} from '../../Context';

import {styles} from './styled';

const ModalTask = () => {
  const [date, setDate] = React.useState(new Date());
  const [describe, setDescribe] = React.useState<string>('');
  const [time, setTime] = React.useState<string>('');
  const [timeModal, setTimeModal] = React.useState<boolean>(false);

  const {modalVisible, setModalVisible} = React.useContext(ModalPropsContext);
  const {tasks, setTasks} = React.useContext(TaskContext);

  const createTask = () => {
    if (!describe || !time) return getAlert();

    setTasks([...tasks, {description: describe, hour: time}]);
    setTime('');
    setDescribe('');
    setModalVisible(false);
  };

  const onChange = (event: any, selectedData: any) => {
    const currentDate = selectedData || date;

    const tempDate = new Date(currentDate);

    const timeClock = tempDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

    setTime(timeClock);
    setTimeModal(false);
    setDate(currentDate);
  };

  const getTimeModal = () => (
    <DateTimePicker
      testID="dataTimePicker"
      value={date}
      mode={'time'}
      is24Hour={true}
      display="clock"
      onChange={onChange}
    />
  );

  const getAlert = () =>
    Alert.alert(
      'Empty data',
      'please add a description or schedule for your task',
      [{style: 'cancel'}, {text: 'OK'}],
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
          <View style={styles.IconContainer}>
            <Text style={styles.TitleAdd}>Add Task</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <IconExit name="exit" size={40} color="#5F33E1" />
            </TouchableOpacity>
          </View>
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
              onPress={() => createTask()}
            />
          </View>
          {!!timeModal && getTimeModal()}
        </View>
      </View>
    </Modal>
  );
};

export default ModalTask;
