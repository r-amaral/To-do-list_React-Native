import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {View, Text} from 'react-native';

import {styles} from './styled';

interface ITasksProps {
  description: string;
  hour: string;
}

const Task = ({description, hour}: ITasksProps) => {
  const [isSelected, setSelection] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
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
  );
};

export default Task;
