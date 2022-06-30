import {COLORS} from 'constants/Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bgImage: {
    width: '100%',
    aspectRatio: 2 / 3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  viewPlayersButton: {
    backgroundColor: COLORS.orange,
    marginVertical: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
  },
});
