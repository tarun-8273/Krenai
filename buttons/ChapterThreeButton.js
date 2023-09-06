import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ChapterThreeButton() {
  return (
    <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#E5E5E5',
              borderRadius: 12,
              padding: 5,
              justifyContent: 'space-between',
            }}>
            <AntDesign name="book" size={18} color="black" />
            <Text style={{color: 'black', marginLeft: 5}}>Buy Hard Copy</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#E5E5E5',
              borderRadius: 12,
              padding: 5,
              justifyContent: 'space-between',
            }}>
            <Octicons name="pencil" size={18} color="black" />
            <Text style={{color: 'black', marginLeft: 5}}>Create Book</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#E5E5E5',
              borderRadius: 12,
              padding: 5,
              justifyContent: 'space-between',
            }}>
            <MaterialIcons name="ondemand-video" size={18} color="black" />
            <Text style={{color: 'black', marginLeft: 5}}>Video</Text>
          </View>
        </View>
  )
}