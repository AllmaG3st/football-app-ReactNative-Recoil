import {COLORS} from 'constants/Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',

    backgroundColor: COLORS.white,
    borderColor: COLORS.blueMedium,
    borderRadius: 10,
    borderWidth: 4,

    flexDirection: 'row',

    marginBottom: 10,
    padding: 10,

    width: '90%',
  },

  label: {
    color: COLORS.greyMedium,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueContainer: {
    marginRight: 25,
  },
});
