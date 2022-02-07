import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import GoBackView from '../GoBackView';

const InterpolateTheme = ({navigation}) => {
  const [theme, setTheme] = useState('light');

  const themeValue = useDerivedValue(() => {
    return theme === 'dark'
      ? withTiming(1, {duration: 1000})
      : withTiming(0, {duration: 1000});
  }, [theme]);

  const AllAniStyle = useAnimatedStyle(() => {
    const backgroundColors = interpolateColor(
      themeValue.value,
      [0, 1],
      ['white', '#404040'],
    );
    return {backgroundColor: backgroundColors};
  });

  const CircleAniStyle = useAnimatedStyle(() => {
    const backgroundColors = interpolateColor(
      themeValue.value,
      [0, 1],
      ['#FAF1F1', '#606060'],
    );
    return {backgroundColor: backgroundColors};
  });

  const TextAniStyle = useAnimatedStyle(() => {
    const fontColor = interpolateColor(
      themeValue.value,
      [0, 1],
      ['#404040', 'white'],
    );
    return {color: fontColor};
  });
  
  console.log(themeValue.value)

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />

      <Animated.View style={[se.aniStyle, AllAniStyle]}>
        <Animated.Text style={[se.text, TextAniStyle]}>
          {theme == 'dark' ? 'Dark Theme' : 'Light Theme'}
        </Animated.Text>
        <Animated.View style={[se.circle, CircleAniStyle]}>
          <Switch
            value={theme == 'dark'}
            onValueChange={toggle => {
              setTheme(toggle ? 'dark' : 'light');
            }}
            trackColor={{true: '#99CCFF', false: '#E0E0E0'}}
            thumbColor={'#0080FF'}
          />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default InterpolateTheme;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  aniStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  circle: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
    shadowOffset: {height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  text: {fontSize: 40, fontWeight: 'bold', marginBottom:50},
});
