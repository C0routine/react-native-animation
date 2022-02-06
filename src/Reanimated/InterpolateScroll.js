import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import GoBackView from '../GoBackView';

const effectWord = ['NEW', 'WORLD', 'Reanimated2', 'KEEP GOING'];

const InterpolateScroll = ({navigation}) => {


  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
        <Animated.ScrollView style={se.main}>

        </Animated.ScrollView>
    </View>
  );
};

export default InterpolateScroll;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  main: {flex: 1, backgroundColor:'red'},
  touchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  touchBox: {
    backgroundColor: '#5FC1E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchText: {fontSize: 15, color: 'black', fontWeight: '700', padding: 10},
  itemBox: {backgroundColor: '#C8F0CA', padding: 25, marginVertical: 20},
});
