/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/screens/Home';
import Splashscreen from './src/screens/Splashscreen';
import UserDetail from './src/screens/UserDetail';
import UsersList from './src/screens/UsersList';
import {LogBox } from 'react-native';
import { Colors } from './src/helpers/constants';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splashscreen}/>
          <Stack.Screen name="Drawer" component={DrawerContainer}/>
          <Stack.Screen name="UserDetail" component={UserDetail}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
const DrawerContainer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} drawerContentOptions={{activeTintColor: Colors.primary}}>
      <Drawer.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Drawer.Screen name="Users" component={UsersList} />
    </Drawer.Navigator>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
