import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import GoBackView from '../GoBackView';

const COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'black',
  'white',
];

const ColorPicker = ({navigation}) => {

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <View style={{flex: 1, backgroundColor: 'white'}}>
          <ColorPicker colors={COLORS}/>
      </View>
    </View>
  );
};

export default ColorPicker;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  main: {flex: 1, alignItems: 'center'},
});
