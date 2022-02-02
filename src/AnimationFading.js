import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GoBackView from './GoBackView';

const AnimationFading = ({navigation}) => {
    
  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <View style={se.main}>
          <Text>asdfasdf</Text>
      </View>
    </View>
  );
};

export default AnimationFading;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  main :{flex:1, alignItems:'center'}
});
