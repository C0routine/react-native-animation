import React, {useRef} from 'react';
import {StyleSheet, View, Text, Animated, PanResponder} from 'react-native';
import { useState } from 'react/cjs/react.development';
import GoBackView from './GoBackView';

const AnimationPanResponder = ({navigation}) => {
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  )[0];

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <View style={se.main}>
        <Text
          style={{
            marginVertical: 20,
            fontSize: 25,
            color: 'black',
            fontWeight: '700',
          }}>
          Drag Box
        </Text>

        <Animated.View
          style={{
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          }}
          {...panResponder.panHandlers}>
          <View
            style={{backgroundColor: 'lightgreen', width: 60, height: 60}}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default AnimationPanResponder;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  main: {flex: 1, alignItems: 'center'},
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
