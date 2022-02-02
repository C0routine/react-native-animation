import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GoBackView from './GoBackView';

const AnimationFading = ({navigation}) => {
  const fadeValue = useState(new Animated.Value(0))[0];

  const FadeIn = () => {
    Animated.timing(fadeValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const FadeOut = () => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <View style={se.main}>
        <View style={se.touchContainer}>
          <TouchableOpacity onPress={FadeIn} style={se.touchBox}>
            <Text style={se.touchText}>FadeIn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={FadeOut} style={se.touchBox}>
            <Text style={se.touchText}>FadeOut</Text>
          </TouchableOpacity>
        </View>
        <Animated.View style={[se.itemBox, {opacity: fadeValue}]}>
          <Text>Fading</Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default AnimationFading;

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
