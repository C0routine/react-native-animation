import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ColorPickerComponent = ({colors}) => {
  return (
      <LinearGradient colors={colors} style={{height:100, width:'90%'}}/>
  );
};

export default ColorPickerComponent;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  main: {flex: 1, alignItems: 'center'},
});
