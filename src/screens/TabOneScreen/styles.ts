import {COLORS} from 'constants/Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bgImage: {
    width: '100%',
    aspectRatio: 2 / 3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  filterButtonContainer: {
    marginHorizontal: 20,
  },
  filterContentContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  filterContentText: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryGreen,
  },
  contentContainer: {
    flex: 1,
  },
  viewPlayersButton: {
    marginTop: 'auto',
    marginHorizontal: 15,
  },
});
