import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  ToastAndroid,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import globalStyles from '../helpers/globalStyles';
import MapView from 'react-native-maps';
import {StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import NavigationHeader from '../components/NavigationHeader';

const Home = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [date, setDate] = useState({date: '', time: ''});
  const [location, setLocation] = useState<{
    longitude?: number;
    latitude?: number;
  }>({longitude: 0, latitude: 0});

  useEffect(() => {
    initDateTime();
    const initLocation = async () => {
      await getLocation();
    };
    initLocation();
  }, []);

  const getLocation = async () => {
    const hasLocationPermission = async () => {
      if (Platform.OS === 'android' && Platform.Version < 23) {
        return true;
      }
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (hasPermission) {
        return true;
      }

      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (status === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }

      if (status === PermissionsAndroid.RESULTS.DENIED) {
        ToastAndroid.show(
          'Location permission denied by user.',
          ToastAndroid.LONG,
        );
      } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show(
          'Location permission revoked by user.',
          ToastAndroid.LONG,
        );
      }
      return false;
    };
    if (await hasLocationPermission()) {
      Geolocation.getCurrentPosition(
        position => {
          setLocation({
            longitude: position.coords.latitude,
            latitude: position.coords.longitude,
          });
        },
        error => {
          console.log(error);
        },
        {
          accuracy: {
            android: 'high',
          },
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 0,
          forceRequestLocation: true,
          showLocationDialog: false,
        },
      );
    }
  };
  const initDateTime = () => {
    setDate({
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    });
    setInterval(() => {
      setDate({
        date: new Date().toDateString(),
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      });
    }, 60000);
  };
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationHeader navigation={navigation} />
      <ScrollView contentContainerStyle={globalStyles.subContainer}>
        <Text style={globalStyles.titleText}>Welcome!</Text>
        <Text style={globalStyles.subTitleText}>{date.date}</Text>
        <Text style={globalStyles.subTitleText}>{date.time}</Text>
      </ScrollView>
      <View style={styles.mapContainer}>
        <MapView
          region={{
            latitude: location.latitude ? location.latitude : 0,
            longitude: location.longitude ? location.longitude : 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
          onRegionChange={(region)=> setLocation({latitude: region.latitude, longitude: region.longitude})}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  map: {
    height: '90%',
  },
  mapContainer: {
    flex: 8,
  },
});
export default Home;
