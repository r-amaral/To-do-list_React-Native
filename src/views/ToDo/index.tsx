import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Dimensions,
} from 'react-native';

import Header from '../../components/Header';
import MenuTask from '../../components/MenuTask';
import ModalTask from '../../components/Modal';
import Task from '../../components/Tasks';
import {TaskContext} from '../../Context';

import {styles} from './styled';

interface IModalProps {
  modalVisible: boolean;
  setModalVisible: Function;
}

export const ModalPropsContext = React.createContext({} as IModalProps);

const ToDo = (): JSX.Element => {
  const halfWindowsWidth = Dimensions.get('window').height;

  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const {tasks} = React.useContext(TaskContext);

  return (
    <ModalPropsContext.Provider value={{modalVisible, setModalVisible}}>
      <SafeAreaView style={styles.backTheme}>
        <View style={{minHeight: halfWindowsWidth}}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.backTheme}>
            <StatusBar barStyle={'light-content'} />
            <Header />
            <Text style={styles.title}>To Do</Text>
            <View style={styles.containerTask}>
              {tasks.map((task: any) => (
                <Task
                  key={task.id}
                  description={task.description}
                  hour={task.hour}
                />
              ))}
            </View>
          </ScrollView>
          <MenuTask />
          <ModalTask />
        </View>
      </SafeAreaView>
    </ModalPropsContext.Provider>
  );
};

export default ToDo;
