import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  useColorScheme,
  Image,
  StyleSheet,
} from 'react-native';
import {Colors} from '../helpers/constants';
import { useNavigation } from '@react-navigation/native';

const Splashscreen = () => {
const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(()=>{
    setTimeout(() => {
        navigation.navigate('Drawer');
    }, 2500);
  },[navigation]);


  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={Colors.primary}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
          <View style={styles.container}>
            <Image
              source={require('../assets/logo/logo_small.png')}
              style={styles.logo}
            />
          </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    resizeMode: 'stretch',
  },
  logo: {
    width: 220,
    height: 350,
  },
});

export default Splashscreen;
