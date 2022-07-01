import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/Colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: 10,
    borderBottomWidth: 2,
    borderColor: COLORS.greyLight,

    width: '100%',
  },
  image: {
    borderRadius: 20,
    borderColor: COLORS.greyLight,
    borderWidth: 1,
    marginRight: 10,

    height: 40,
    width: 40,
  },
  name: {
    fontWeight: 'bold',
  },
  nameContainer: {
    flexGrow: 1,
  },
  positionContainer: {
    marginHorizontal: 15,
    alignItems: 'flex-end',
  },
  points: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
