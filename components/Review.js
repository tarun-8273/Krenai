import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function Review() {
  return (
    <View>
      {/* See All */}
      <View style={{alignItems: 'flex-end', margin: 10}}>
        <TouchableOpacity>
          <Text style={{color: 'red', fontSize: 12}}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Rating */}
      <View
        style={{
          margin: 10,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: 'black', fontSize: 42}}>4.0</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontWeight: 'bold'}}>
            * * * * *
          </Text>
          <Text style={{fontWeight: 'bold'}}>300 Ratings</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>5</Text>
            <Text style={{alignItems: 'center', fontSize: 16, color: 'yellow', marginLeft:5}}>
              *
            </Text>
            <View style={{width:150, height:10, backgroundColor:'yellow', marginLeft:10, alignItems:'center'}}></View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>4</Text>
            <Text style={{alignItems: 'center', fontSize: 16, color: 'yellow',marginLeft:5}}>
              *
            </Text>
            <View style={{width:150, height:10, backgroundColor:'yellow', marginLeft:10, alignItems:'center'}}></View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>3</Text>
            <Text style={{alignItems: 'center', fontSize: 16, color: 'yellow',marginLeft:5}}>
              *
            </Text>
            <View style={{width:150, height:10, backgroundColor:'yellow', marginLeft:10, alignItems:'center'}}></View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>2</Text>
            <Text style={{alignItems: 'center', fontSize: 16, color: 'yellow',marginLeft:5}}>
              *
            </Text>
            <View style={{width:150, height:10, backgroundColor:'yellow', marginLeft:10, alignItems:'center'}}></View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>1</Text>
            <Text style={{alignItems: 'center', fontSize: 16, color: 'yellow',marginLeft:5}}>
              *
            </Text>
            <View style={{width:150, height:10, backgroundColor:'yellow', marginLeft:10, alignItems:'center'}}></View>
          </View>
        </View>
      </View>

      {/* Rating With Ist Person */}
      <View style={{margin: 10}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assets/images/homeScreen/background.png')}
            style={{
              width: 32,
              height: 32,
              borderRadius: 50,
              alignItems: 'center',
            }}
          />
          <Text
            style={{
              marginLeft: 10,
              color: '#000',
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Emma Waston
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={{
              color: 'yellow',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            * * * * *
          </Text>
          <Text style={{marginLeft: 10, alignItems: 'center'}}>10/11/2022</Text>
        </View>
        <Text style={{color: '#000'}}>
          Lorem ipsum has been the indistry standard dummy text ever since the
          1500s; when an unknows make a type specimen book.
        </Text>
      </View>

      {/* Rating With IInd Person */}
      <View style={{margin: 10}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assets/images/homeScreen/background.png')}
            style={{
              width: 32,
              height: 32,
              borderRadius: 50,
              alignItems: 'center',
            }}
          />
          <Text
            style={{
              marginLeft: 10,
              color: '#000',
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Emma Waston
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={{
              color: 'yellow',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            * * * * *
          </Text>
          <Text style={{marginLeft: 10, alignItems: 'center'}}>10/11/2022</Text>
        </View>
        <Text style={{color: '#000'}}>
          Lorem ipsum has been the indistry standard dummy text ever since the
          1500s; when an unknows make a type specimen book.
        </Text>
      </View>

      {/* Review Button */}
      <TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'red',
          margin: 10,
          padding: 12,
        }}>
        <Text style={{color: 'white'}}>Write Review</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}
