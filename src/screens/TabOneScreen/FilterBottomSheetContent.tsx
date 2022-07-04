import {View, Text, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {useRecoilState} from 'recoil';

//@ts-ignore
import {positionFilterState} from 'atoms/Players';

import {COLORS} from 'constants/Colors';
import styles from './styles';

const positions = ['FWD', 'MID', 'DEF', 'GKC'];

type Props = {};

const FilterBottomSheetContent = (props: Props) => {
  const [positionFilter, setPositionFilter] =
    useRecoilState<string[]>(positionFilterState);

  const isSelected = (position: string) => positionFilter.includes(position);

  const handleFilterPress = useCallback((position: string) => {
    setPositionFilter((prevState: string[]) => {
      if (prevState.includes(position)) {
        return prevState.filter(pos => pos !== position);
      } else {
        return [...prevState, position];
      }
    });
  }, []);

  const renderPositions = useCallback(() => {
    return positions.map(position => {
      return (
        <Pressable
          key={position}
          onPress={() => handleFilterPress(position)}
          style={[
            styles.filterContentText,
            {
              backgroundColor: isSelected(position)
                ? 'purple'
                : COLORS.greyLight,
            },
          ]}>
          <Text>{position}</Text>
        </Pressable>
      );
    });
  }, [positionFilter]);

  return <View style={styles.filterContentContainer}>{renderPositions()}</View>;
};

export default FilterBottomSheetContent;
