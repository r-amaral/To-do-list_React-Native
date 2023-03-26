import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {View, Text, StyleSheet} from 'react-native';

const Task = () => {
  const [isSelected, setSelection] = React.useState(false);

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
        <Text style={styles.hour}>8:00 AM</Text>
        <Text style={styles.description}>Go to church</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 20,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  hour: {
    color: 'white',
  },
  description: {
    color: 'white',
    marginTop: 20,
  },
});

export default Task;
