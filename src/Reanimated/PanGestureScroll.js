import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useDerivedValue,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import PanGestureScrollComponent, {
  PAGE_WIDTH,
} from '../components/PanGestureScrollComponent';
import GoBackView from '../GoBackView';


const TITLE = ['Pan Gesture', 'Non Scroll View', 'Smooth', 'Scroll'];
const MAX_TRANSX = -PAGE_WIDTH * (TITLE.length - 1);

const PanGestureScroll = ({navigation}) => {
  const transX = useSharedValue(0);
  const backupX = useSharedValue(0);

  const clampedTransX = useDerivedValue(() => {
    return Math.max(Math.min(transX.value, 0), MAX_TRANSX);
  });

  const panGesture = Gesture.Pan()
    .onStart(() => {
      backupX.value = clampedTransX.value;
    })
    .onUpdate((event) => {
      transX.value = event.translationX + backupX.value;
    })
    .onEnd(event => {
      transX.value = withDecay({velocity: event.velocityX});
    });

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <GestureDetector gesture={panGesture}>
        <Animated.View style={{flexDirection: 'row', flex: 1}}>
          {TITLE.map((title, index) => {
            return (
              <PanGestureScrollComponent
                key={index}
                index={index}
                title={title}
                transX={clampedTransX}
              />
            );
          })}
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default PanGestureScroll;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  main: {flex: 1, alignItems: 'center'},
});
