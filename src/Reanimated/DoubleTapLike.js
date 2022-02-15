import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import GoBackView from '../GoBackView';

const DoubleTapLike = ({navigation}) => {
  const starScale = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const subTextOpactiy = useSharedValue(0);
  const StarAnimatedImage = Animated.createAnimatedComponent(FastImage);

  const StarAniStyle = useAnimatedStyle(() => {
    return {transform: [{scale: Math.max(starScale.value, 0)}]};
  });
  const TextAniStyle = useAnimatedStyle(() => {
    return {opacity: textOpacity.value};
  });
  const SubTextAniStyle = useAnimatedStyle(() => {
    return {opacity: subTextOpactiy.value};
  });

  const DoubleTapStart = useCallback(() => {
    'worklet';
    textOpacity.value = withTiming(1, {duration: 300}, isFinished => {
      if (isFinished) {
        textOpacity.value = withDelay(500, withTiming(0, {duration: 300}));
      }
    });
    starScale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        starScale.value = withDelay(300, withSpring(0));
      }
    });
  });

  const OneTapStart = useCallback(() => {
    'worklet';
    subTextOpactiy.value = withTiming(1, {duration: 300}, isFinished => {
      if (isFinished) {
        subTextOpactiy.value = withDelay(1000, withTiming(0, {duration: 300}));
      }
    });
  });

  const singleTap = Gesture.Tap().onStart(() => {
    console.log('tap one');
    OneTapStart();
  });

  // gesture single tap delay
  const doubleTap = Gesture.Tap()
    .maxDelay(200)
    .numberOfTaps(2)
    .onStart(() => {
      console.log('tap two');
      DoubleTapStart();
    });

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <View style={se.main}>
        <GestureDetector gesture={Gesture.Exclusive(doubleTap, singleTap)}>
          <Animated.View>
            <View style={se.starBox}>
              <StarAnimatedImage
                source={require('../../assets/Star.png')}
                style={[{width: 150, height: 150}, StarAniStyle]}
                resizeMode={'contain'}
              />
              <Animated.Text style={[TextAniStyle, {fontSize: 20}]}>
                You Subscribe Star!!!
              </Animated.Text>
            </View>
            <Animated.Text style={[SubTextAniStyle, {fontSize: 20}]}>
              Double Tap you Subscribe Star
            </Animated.Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
};

export default DoubleTapLike;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  starBox: {
    width: 200,
    height: 200,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
