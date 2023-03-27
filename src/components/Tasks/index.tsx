import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {View, Text, TouchableOpacity} from 'react-native';
import IconMT from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styled';
import {TaskContext} from '../../Context';

interface ITasksProps {
  description: string;
  hour: string;
  id: number;
}

const Task = ({description, hour, id}: ITasksProps) => {
  const [isSelected, setSelection] = React.useState<boolean>(false);

  const {tasks, setTasks} = React.useContext(TaskContext);
  const deleteTask = (_id: number) => {
    console.log(id);
    console.log(tasks.filter(({id}: any) => id !== _id));
    setTasks([...tasks, tasks.filter(({id}: any) => id !== _id)]);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.MainContent}>
          <BouncyCheckbox
            size={25}
            fillColor="#5F33E1"
            unfillColor="transparent"
            innerIconStyle={{borderWidth: 2}}
            onPress={() => setSelection(!isSelected)}
          />
          <View>
            <Text style={styles.hour}>{description}</Text>
            <Text style={styles.description}>{hour}</Text>
          </View>
        </View>
        <View style={styles.IconContainer}>
          <TouchableOpacity>
            <IconMT name="playlist-edit" size={23} color="#5F33E1" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTask(id)}>
            <IconMT name="trash-can" size={23} color="#5F33E1" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Task;
