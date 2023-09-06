import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ChapterPlayButton() {
  return (
    <View>
      {/* BottomChapterPlay */}
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#ffe6e6',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 5,
              marginBottom: 5,
            }}>
            <Image
              source={require('../assets/images/homeScreen/background.png')}
              style={{width: 50, height: 50, borderRadius: 10, marginRight: 8}}
            />
            <View style={{margin: 10}}>
              <Text
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 14,
                  textTransform: 'uppercase',
                }}>
                The Legacy Helen Row
              </Text>
              <Text numberOfLines={1} style={{fontSize: 14}}>
                Jeremy Irons
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#ffe6e6',
                flex: 1,
                marginLeft: 32,
                marginRight: 32,
              }}>
              <TouchableOpacity>
                <AntDesign name="play" size={32} color="red" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="play-skip-forward-outline"
                  size={32}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  )
}