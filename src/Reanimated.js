import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import GoBackView from './GoBackView';

const Reanimated = ({navigation}) => {
  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <View style={se.main}>
        <View style={se.touchContainer}>
          <TouchableOpacity onPress={() => {}} style={se.touchBox}>
            <Text style={se.touchText}>animation</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={se.touchBox}>
            <Text style={se.touchText}>animation</Text>
          </TouchableOpacity>
        </View>

        {/* Animation */}
      </View>
    </View>
  );
};

export default Reanimated;

const se = StyleSheet.create({
  all: {flex: 1, backgroundColor: 'white'},
  main: {flex: 1, alignItems: 'center'},
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
