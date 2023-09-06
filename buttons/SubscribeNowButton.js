import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SubscribeNowButton() {
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
        <MaterialCommunityIcons name="crown" size={24} color="red" />

        <Text style={{marginLeft: 20, fontSize: 16, color: 'red'}}>
          Subscribe Now
        </Text>
      </View>
    </TouchableOpacity>
  );
}
