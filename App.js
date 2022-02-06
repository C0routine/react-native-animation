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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
