import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
import TabNavigator from './navigation/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Main}
          name="Main"
          options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Home" 
        component={TabNavigator} 
        options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#000'}}>
          Assignment
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: '#ff0000',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
          Let's Start
        </Text>
        <AntDesign name="right" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

//  const Home = () => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

export default App;
