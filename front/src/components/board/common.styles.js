import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#548EFF',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.57,
    shadowRadius: 9.51,
    elevation: 15,
  },
  box: {
    flex: 1,
    padding: 5,
    display: 'flex',
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
