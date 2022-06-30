import {COLORS} from 'constants/Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    marginVertical: 20,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  buttonText: {
    color: COLORS.white,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
