import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ListItem({id, title, subTitle, content}) {
  return (
    <View>
      {/* Tab Content */}
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        margin: 10,
        backgroundColor:'#F7F8F9'
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          marginLeft: 10,
        }}>
        <Text style={{fontWeight:'bold'}}>{id}</Text>
        <View style={{margin: 10}}>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 14,
              textTransform: 'uppercase',
            }}>
            {title}
          </Text>
          <Text numberOfLines={1} style={{fontSize: 14}}>{subTitle}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          padding: 10,
          width: 100,
        }}>

             <AntDesign
              onPress={() => navigation.navigate('Main')}
              name={content}
              size={22}
              color="#000"
              style={{marginLeft: 20}}
            />
        
      </TouchableOpacity>
    </View>

    </View>
  );
}
