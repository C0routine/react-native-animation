import React from 'react';
import {StyleSheet, View} from 'react-native';
import GoBackView from './GoBackView';

const BaseTemplate = ({navigation}) => {
  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <View style={{flex:1}}>
        
        

      </View>
    </View>
  );
};

export default BaseTemplate;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
});
