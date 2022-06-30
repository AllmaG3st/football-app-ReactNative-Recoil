import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/Colors';

export default StyleSheet.create({
  bgImage: {
    width: '100%',
    aspectRatio: 2 / 3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    backgroundColor: COLORS.grey,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 12,
    padding: 2,
    paddingHorizontal: 7,
  },
});
