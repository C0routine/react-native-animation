import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AnimationIndex from './src/AnimationIndex';
import AnimationFading from './src/AnimationFading';
import AnimationMoving from './src/AnimationMoving';
import AnimationPanResponder from './src/AnimationPanResponder';
import Reanimated from './src/Reanimated';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Animation">
        <Stack.Screen name="Animation" component={AnimationIndex} />
        <Stack.Screen name="Fading" component={AnimationFading} />
        <Stack.Screen name="Moving" component={AnimationMoving} />
        <Stack.Screen name="AnimationPanResponder" component={AnimationPanResponder} />
        <Stack.Screen name="Reanimated" component={Reanimated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
