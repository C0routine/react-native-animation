import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const InterpolatePage = ({effect, index, transX}) => {
  const aniStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      transX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      transX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, (width * 0.7) / 2, 0],
      Extrapolate.CLAMP,
    );

    return {
      borderRadius,
      transform: [{scale: scale}],
    };
  });

  const textStyle = useAnimatedStyle(() => {
    const trasnY = interpolate(
      transX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      transX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-2, 1, -2],
      Extrapolate.CLAMP,
    );

    return {transform: [{translateY: trasnY}], opacity:opacity};
  });

  return (
    <View style={[se.all, {backgroundColor: `rgba(0,0,255,0.${index + 2})`}]}>
      <Animated.View style={[se.event, aniStyle]} />
      <Animated.View style={[textStyle, {position: 'absolute'}]}>
        <Text
          style={{
            fontSize: 40,
            color: 'white',
            fontWeight: '700',
            textTransform: 'uppercase',
          }}>
          {effect}
        </Text>
      </Animated.View>
    </View>
  );
};

export default InterpolatePage;

const se = StyleSheet.create({
  all: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  event: {
    width: width * 0.7,
    height: width * 0.7,
    backgroundColor: 'rgba(0,0,255,0.4)',
  },
});
