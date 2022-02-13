import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import GoBackView from '../GoBackView';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';

const {width, height} = Dimensions.get('window');
const CIRCLE_LENGHT = 1000;
const R = CIRCLE_LENGHT / (Math.PI * 2);
const CIRCLE_BACKGROUND = '#99FFFF';

const CircleProgress = ({navigation}) => {
  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <View style={{flex: 1, backgroundColor: '#B266FF'}}>
        <Canvas style={{flex: 1}}>
          <Group style={'stroke'} strokeWidth={10} color={CIRCLE_BACKGROUND}>
            <Circle cx={width/2} cy={height/2-100} r={100} />
          </Group>
        </Canvas>
      </View>
    </View>
  );
};

export default CircleProgress;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
});
