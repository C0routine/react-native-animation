import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import ColorPickerComponent from '../components/ColorPickerComponent';
import GoBackView from '../GoBackView';

const COLORS = [];
// for(let i=0; )

const ColorPicker = ({navigation}) => {
  const isFocused = useIsFocused();
  const [colors, setColors] = useState([0]);
  const {width} = Dimensions.get('window');

  const SettingGradient = () => {
    let temp = [];
    for (let i = 0; i < 256; i++) {
      temp.push(i);
    }
    setColors(temp);
  };

  useEffect(() => {
    if (isFocused) {
      SettingGradient();
    }
  }, []);

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />

      <View style={{flex: 3, backgroundColor: 'white'}}>
        <View style={{width:100, height:100, backgroundColor:'rgba(255,0,200,0.5)'}}/>

      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <ColorPickerComponent colors={COLORS} /> */}
        {colors.map((co, index) => {
          
          return <View key={index} style={{flex:1, backgroundColor: `rgba(255,255,${index},1)`}} />;
        })}
      </View>
    </View>
  );
};

export default ColorPicker;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  main: {flex: 1, alignItems: 'center'},
});
