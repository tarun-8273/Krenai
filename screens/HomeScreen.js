import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Carousel from 'react-native-snap-carousel';
import {chapter, sliderData} from '../model/data';
import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimesnion';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import Review from '../components/Review';
import ChapterPlayButton from '../buttons/ChapterPlayButton';
import SubscribeNowButton from '../buttons/SubscribeNowButton';
import DownloadButton from '../buttons/DownloadButton';
import ChapterThreeButton from '../buttons/ChapterThreeButton';

export default function HomeScreen({navigation}) {
  const [chapterTab, setChapterTab] = useState(1);
  const randerBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setChapterTab(value);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            width: '100%',
            borderRadius: 5,
            flexDirection: 'row',
            marginBottom: 50,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AntDesign
              name="left"
              size={22}
              color="#000"
              onPress={() => navigation.navigate('Main')}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: '#000',
                marginLeft: 10,
              }}>
              The Legacy Helen Row
            </Text>
          </TouchableOpacity>

          <View
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#000',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AntDesign
              onPress={() => navigation.navigate('Main')}
              name="sharealt"
              size={22}
              color="#000"
              style={{marginLeft: 20}}
            />
            <AntDesign
              onPress={() => navigation.navigate('Main')}
              name="hearto"
              size={22}
              color="#000"
              style={{marginLeft: 20}}
            />
          </View>
        </View>

        {/* Carousel */}
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={randerBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        {/* Middle Content With Buttons */}

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
            marginStart: 10,
            marginEnd: 10,
          }}>
          <Text style={{fontWeight: 'bold', color: '#000', fontSize: 18}}>
            The Legacy Helen Row(105hr)
          </Text>
          <Text
            style={{
              backgroundColor: 'green',
              color: 'white',
              fontSize: 18,
              borderRadius: 12,
              paddingStart: 10,
              paddingEnd: 10,
            }}>
            4.5*
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
            marginStart: 10,
            marginEnd: 10,
          }}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>
            By : Jeremy Irans
          </Text>
          <Text style={{fontWeight: 'bold', color: '#000'}}>|</Text>
          <Text style={{fontSize: 16, fontWeight: '700'}}>Source : 1PK</Text>
          <Text style={{fontWeight: 'bold', color: '#000'}}>|</Text>
          <Text style={{fontSize: 16, fontWeight: '700'}}>Listen : 400K</Text>
        </View>

        <View style={{margin: 10}}>
          <Text style={{fontSize: 16}}>
            Lorem ipsum has been the indistry standard dummy text ever since the
            1500s; when an unknows make a type specimen book.
          </Text>
        </View>

        {/* Two Button With background */}
        <View
          style={{
            margin: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'red',
                borderRadius: 1,
                paddingLeft: 20,
                paddingRight: 32,
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: 'center',
              }}>
              <MaterialIcons name="multitrack-audio" size={24} color="#fff" />
              <Text style={{marginLeft: 20, fontSize: 16, color: 'white'}}>
                Play Audio
              </Text>
            </View>
          </TouchableOpacity>

          {chapterTab == 1 && <SubscribeNowButton />}
          {chapterTab == 2 && <DownloadButton />}
        </View>

        {/* Three Buttons */}
        {chapterTab == 1 && <ChapterThreeButton/>}

        {/* Tab Indicator */}
        <View style={{marginVertical: 20, marginHorizontal: 10}}>
          <CustomSwitch
            selectionMode={1}
            option1="CHAPTERS 50"
            option2="REVIEWS"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {chapterTab == 1 &&
          chapter.map(item => (
            <ListItem
              key={item.id}
              id={item.id}
              title={item.title}
              subTitle={item.subTitle}
              content={item.content}
            />
          ))}

        {chapterTab == 1 && <ChapterPlayButton />}

        {chapterTab == 2 && <Review />}

        {/* BottomChapterPlay */}
        {/* <View
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
                marginLeft: 12,
                marginRight: 12,
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
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
