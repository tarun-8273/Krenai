import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function DownloadButton() {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 1,
          paddingLeft: 20,
          paddingRight: 32,
          paddingTop: 10,
          paddingBottom: 10,
          borderColor: 'red',
          borderWidth: 1,
          borderRadius: 5,
        }}>
        <AntDesign name="download" size={24} color="red" />

        <Text style={{marginLeft: 20, fontSize: 16, color: 'red'}}>
          Download 200
        </Text>
      </View>
    </TouchableOpacity>
  );
}
