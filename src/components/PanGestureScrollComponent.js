import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

const {width : PAGE_WIDTH} = Dimensions.get('window');
const PanGestureScrollComponent = ({index, title, transX}) => {

  const transAniStyle = useAnimatedStyle(() => {
    return {transform: [{translateX: transX.value + (PAGE_WIDTH*index)}]};
  });

  return (
    <Animated.View
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: `rgba(0,0,256,0.${index + 2})`,
          alignItems:'center', justifyContent:'center'
        },
        transAniStyle,
      ]}>
      <Text style={se.titleStyle}>{title}</Text>
    </Animated.View>
  );
};

export {PAGE_WIDTH};
export default PanGestureScrollComponent;

const se = StyleSheet.create({
    titleStyle :{fontSize:40, fontWeight:'800', color:'black'}
});
