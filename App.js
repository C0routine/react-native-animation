import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AnimationIndex from './src/AnimationIndex';
import AnimationFading from './src/AnimationFading';

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Animation" component={AnimationIndex}/>
          <Stack.Screen name="Fading" component={AnimationFading}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;