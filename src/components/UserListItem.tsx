import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import globalStyles from '../helpers/globalStyles';

const UserListItem = ({item}: any) => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.normalText}>{item.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
  },
});
export default UserListItem;
