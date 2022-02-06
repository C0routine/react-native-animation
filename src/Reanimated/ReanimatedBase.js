import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions, ScrollView
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import GoBackView from '../GoBackView';

const handleRotation = progress => {
  'worklet';

  return `${progress.value * 2 * Math.PI}rad`;
};

const ReanimatedBase = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;
  const opacityValue = useSharedValue(0);
  const scaleValue = useSharedValue(0.1);
  const borderValue = useSharedValue(0);
  const rotateValue = useSharedValue(0);

  const RepeatTiming = () => {
    return withRepeat(withTiming(1, {duration: 2000}), -1, true);
  };

  const OpacityStyle = useAnimatedStyle(() => {
    return {opacity: opacityValue.value};
  });
  const ScaleStyle = useAnimatedStyle(() => {
    return {transform: [{scaleX: scaleValue.value}]};
  });
  const BorderStyle = useAnimatedStyle(() => {
    return {borderRadius: borderValue.value * 35};
  });
  const RotateStyle = useAnimatedStyle(() => {
    return {transform: [{rotate: `${rotateValue.value * 2}rad`}]};
  });

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center'}}>
        <View style={se.touchContainer}>
          <TouchableOpacity
            onPress={() => {
              opacityValue.value = RepeatTiming();
            }}
            style={se.touchBox}>
            <Text style={se.touchText}>OpacityStyle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              scaleValue.value = RepeatTiming();
            }}
            style={se.touchBox}>
            <Text style={se.touchText}>ScaleStyle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              borderValue.value = RepeatTiming();
            }}
            style={se.touchBox}>
            <Text style={se.touchText}>BorderStyle</Text>
          </TouchableOpacity>
        </View>
        <View style={se.touchContainer}>
          <TouchableOpacity
            onPress={() => {
              rotateValue.value = RepeatTiming();
            }}
            style={se.touchBox}>
            <Text style={se.touchText}>RotateStyle</Text>
          </TouchableOpacity>
        </View>

        <Animated.View style={[OpacityStyle, se.itemBox]}>
          <Text style={se.itemText}>OpacityStyle</Text>
        </Animated.View>

        <Animated.View
          style={[
            se.itemBox,
            ScaleStyle,
            {width: screenWidth, alignItems: 'center'},
          ]}>
          <Text style={se.itemText}>ScaleStyle</Text>
        </Animated.View>

        <Animated.View style={[se.itemBox, BorderStyle]}>
          <Text style={se.itemText}>BorderStyle</Text>
        </Animated.View>

        <Animated.View style={[se.itemBox, RotateStyle]}>
          <Text style={se.itemText}>RotateStyle</Text>
        </Animated.View>

        {/* <Animated.View style={[se.itemBox, reanimatedStyle]} /> */}
      </ScrollView>
    </View>
  );
};

export default ReanimatedBase;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
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
  itemBox: {backgroundColor: 'lightgreen', padding: 25, marginTop: 30},
  itemText: {fontSize: 20, fontWeight: '700', color: 'black'},
});
