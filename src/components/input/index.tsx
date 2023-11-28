import React, { memo, useMemo } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useInput } from './useInput';

function InputScreen(): JSX.Element {
  const { status, setStatus, icon, setIcon, handleSubmit } = useInput();
  return useMemo(() => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Ngày hôm nay của bạn thế nào ???</Text>
          <TextInput
            value={status as string}
            onChangeText={setStatus}
            placeholder="Enter your status"
            style={styles.input}
          />
          <TextInput
            value={icon as string}
            onChangeText={setIcon}
            placeholder="Enter your icon"
            style={styles.input}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.textBtn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }, [handleSubmit, icon, setIcon, setStatus, status]);
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    height: 48,
    width: '80%',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  button: {
    marginTop: 40,
    width: '80%',
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
});

export default memo(InputScreen);
