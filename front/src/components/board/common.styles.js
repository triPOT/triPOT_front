import {StyleSheet} from 'react-native';
import GrayShadowBox from '../commonsStyles/GrayShadowBox';

export const commonStyles = StyleSheet.create({
  layout: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#548EFF',
    ...GrayShadowBox.grayshadowbox,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    padding: 4,
    borderWidth: 0,
    borderRadius: 10,
  },
});
