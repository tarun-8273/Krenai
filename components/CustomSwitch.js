import {View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };
  return (
    <View
      style={{
        height: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? '#fff' : '#000',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 1 ? 'red' : 'white',
            fontSize: 14,
          }}>
          {option1}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? '#fff' : '#000',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 2 ? 'red' : 'white',
            fontSize: 14,
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
