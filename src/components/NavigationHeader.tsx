import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {Colors} from '../helpers/constants';

const NavigationHeader = ({navigation}: any) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title="MENU"
        onPress={() => navigation.toggleDrawer()}
        color={Colors.secondary}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    height: '90%',
  },
  mapContainer: {
    flex: 8,
  },
  buttonContainer: {
    alignContent: 'flex-start',
    width: '17%',
  },
});
export default NavigationHeader;
