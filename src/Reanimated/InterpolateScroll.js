import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import InterpolatePage from '../components/InterpolatePage';
import GoBackView from '../GoBackView';

const effectWord = ['NEW', 'WORLD', 'Reanimated2', 'KEEP GOING'];

const InterpolateScroll = ({navigation}) => {
  const transX = useSharedValue(0);

  const ScrollHandler = useAnimatedScrollHandler(event => {
    transX.value = event.contentOffset.x;
  });

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <Animated.ScrollView
        style={se.main}
        horizontal={true}
        onScroll={ScrollHandler}
        scrollEventThrottle={16}
        pagingEnabled={true}>
        {effectWord.map((effect, idx) => {
          return (
            <InterpolatePage
              key={idx}
              effect={effect}
              index={idx}
              transX={transX}
            />
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default InterpolateScroll;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  main: {flex: 1},
  touchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  touchBox: {
    backgroundColor: '#5FC1E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchText: {fontSize: 15, color: 'black', fontWeight: '700', padding: 10},
  itemBox: {backgroundColor: '#C8F0CA', padding: 25, marginVertical: 20},
});
