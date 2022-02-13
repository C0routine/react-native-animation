import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {PinchGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import GoBackView from '../GoBackView';

const AnimatedImage = Animated.createAnimatedComponent(Image);
const {width, height} = Dimensions.get('window')

const PinchGestureView = ({navigation}) => {
  const ImageUrl =
    'https://media.istockphoto.com/photos/astronaut-lying-in-the-meadow-picture-id1304263738';

  const scale = useSharedValue(1);
  const focalX = useSharedValue(1);
  const focalY = useSharedValue(1);

  const PinchHandler = useAnimatedGestureHandler({
    onActive: event => {
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    },
    onEnd: () => {
      scale.value = withTiming(1);
    },
  });

  const PinchStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: width / 2},
        {translateY: height / 2},
      ],
    };
  });

  const FocalStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: focalX.value}, {translateY: focalY.value}],
    };
  });

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <PinchGestureHandler onGestureEvent={PinchHandler}>
        <Animated.View style={{flex: 1}}>
          <AnimatedImage
            source={{uri: ImageUrl}}
            resizeMode={'contain'}
            style={[{flex: 1}, PinchStyle]}
          />
          <Animated.View style={[se.focal, FocalStyle]} />
        </Animated.View>
      </PinchGestureHandler>
    </View>
  );
};

export default PinchGestureView;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  focal: {
    ...StyleSheet.absoluteFillObject,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
  },
});
