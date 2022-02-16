import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AnimationFading from './src/AnimationFading';
import AnimationMoving from './src/AnimationMoving';
import AnimationPanResponder from './src/AnimationPanResponder';
import ReactAnimatedPerformence from './src/Reanimated/ReactAnimatedPerformence';
import ReanimatedBase from './src/Reanimated/ReanimatedBase';
import ReanimatedGesture from './src/Reanimated/ReanimatedGesture';
import InterpolateScroll from './src/Reanimated/InterpolateScroll';
import Home from './src/Home';
import InterpolateTheme from './src/Reanimated/InterpolateTheme';
import PinchGestureView from './src/Reanimated/PinchGestureView';
import CircleProgress from './src/Reanimated/CircleProgress';
import DoubleTapLike from './src/Reanimated/DoubleTapLike';
import PanGestureScroll from './src/Reanimated/PanGestureScroll';
import ColorPicker from './src/Reanimated/ColorPicker';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Fading" component={AnimationFading} />
        <Stack.Screen name="Moving" component={AnimationMoving} />
        <Stack.Screen
          name="AnimationPanResponder"
          component={AnimationPanResponder}
        />
        <Stack.Screen
          name="ReactAnimatedPerformence"
          component={ReactAnimatedPerformence}
        />
        <Stack.Screen name="ReanimatedBase" component={ReanimatedBase} />
        <Stack.Screen name="ReanimatedGesture" component={ReanimatedGesture} />
        <Stack.Screen name="InterpolateScroll" component={InterpolateScroll} />
        <Stack.Screen name="InterpolateTheme" component={InterpolateTheme} />
        <Stack.Screen name="PinchGestureView" component={PinchGestureView} />
        <Stack.Screen name="DoubleTapLike" component={DoubleTapLike} />
        <Stack.Screen name="PanGestureScroll" component={PanGestureScroll} />
        <Stack.Screen name="ColorPicker" component={ColorPicker} />
        <Stack.Screen name="CircleProgress" component={CircleProgress} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
