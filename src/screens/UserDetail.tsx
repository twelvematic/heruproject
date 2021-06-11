import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../helpers/globalStyles';
import {Colors} from '../helpers/constants';
import {useNavigation} from '@react-navigation/native';

const UserDetail = ({route}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {userId} = route.params;
  const navigation = useNavigation();
  // @ts-ignore
  const user = useSelector((state: RootState) =>
    state.users.users.find(x => x.id === userId),
  );
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <View>
            <Text style={globalStyles.normalTextBold}>Back to list</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.container}>
        <View style={styles.detailsContainer}>
          <Text style={globalStyles.titleText}>{user.name}</Text>
          <Text style={globalStyles.subTitleText}>{user.company.name}</Text>
          <Text style={globalStyles.subTitleText}>{user.email}</Text>
          <Text style={globalStyles.subTitleText}>{user.phone}</Text>
          <Text style={globalStyles.subTitleText}>{user.website}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  detailsContainer: {
    borderColor: Colors.primary,
    borderWidth: 2,
    padding: 15,
  },
});
export default UserDetail;
