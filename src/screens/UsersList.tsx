import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
//import { Colors } from '../helpers/constants';
import globalStyles from '../helpers/globalStyles';
import UserListItem from '../components/UserListItem';
import {useSelector, useDispatch} from 'react-redux';
import usersActions from '../redux/Users/actions';
import {RootState} from '../redux/store';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NavigationHeader from '../components/NavigationHeader';

const UsersList = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(usersActions.getUsers());
  }, [dispatch]);
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationHeader navigation={navigation} />
      <View style={globalStyles.subContainer}>
        <Text style={globalStyles.titleText}>Users</Text>
        <FlatList
          style={styles.list}
          data={users}
          renderItem={({item}) => (
            <UserItem item={item} navigation={navigation} />
          )}
          ItemSeparatorComponent={Separator}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const UserItem = ({item, navigation}: any) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserDetail', {userId: item.id})}>
      <UserListItem item={item} />
    </TouchableOpacity>
  );
};
const Separator = () => {
  return <View style={styles.separator} />;
};
const styles = StyleSheet.create({
  list: {
    marginTop: 15,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CEDCCE',
  },
});

export default UsersList;
