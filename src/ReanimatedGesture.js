import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import GoBackView from './GoBackView';

const limitSize = Dimensions.get('window').width - 20;
const ReanimatedGesture = ({navigation}) => {
  const transX = useSharedValue(0);
  const transY = useSharedValue(0);

  const TranslateStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: transX.value}, {translateY: transY.value}],
    };
  });

  const GestureTranslateXY = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.transX = transX.value;
      context.transY = transY.value;
    },
    onActive: (event, context) => {
      transX.value = event.translationX + context.transX;
      transY.value = event.translationY + context.transY;
    },
    onEnd: event => {
      const distance = Math.sqrt(transX.value ** 2 + transY.value ** 2);
      if (distance < limitSize / 2 + 80 / 2) { 
        // 최대 반지름 길이 + animation 크기 
        transX.value = withSpring(0);
        transY.value = withSpring(0);
      }
    },
  });

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />

      <View style={se.main}>
        <View style={se.limit}>
          <PanGestureHandler onGestureEvent={GestureTranslateXY}>
            <Animated.View style={[se.ani, TranslateStyle]} />
          </PanGestureHandler>
        </View>
      </View>
    </View>
  );
};

export default ReanimatedGesture;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  ani: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#5FC1E0',
  },
  limit: {
    width: limitSize,
    height: limitSize,
    borderRadius: limitSize / 2,
    borderColor: 'lightblue',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
