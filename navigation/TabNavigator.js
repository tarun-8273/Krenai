import {View, Text} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PlayListScreen from '../screens/PlayListScreen';
import BookMarkScreen from '../screens/BookMarkScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle:{backgroundColor:'white'},
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: 'red',
      }}>
      <Tab.Screen
        name="Homes"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PlayList"
        component={PlayListScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="playlist-music"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BookMark"
        component={BookMarkScreen}
        options={{
            tabBarBadge: 3,
            tabBarBadgeStyle: {backgroundColor:'red'},
          tabBarIcon: ({color, size}) => (
            <AntDesign name="hearto" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
