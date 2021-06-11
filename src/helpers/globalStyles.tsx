import {StatusBar, StyleSheet} from 'react-native';
import { Colors } from './constants';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 15,
  },
  titleText: {
    fontFamily: 'Arial',
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  subTitleText: {
    fontFamily: 'Arial',
    fontSize: 20,
  },
  normalText: {
    fontFamily: 'Arial',
    fontSize: 18,
  },
  normalTextBold:{
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
