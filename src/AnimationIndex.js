import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import GoBackView from './GoBackView';

const AnimationIndex = ({navigation}) => {
  return (
    <FlatList
      style={se.all}
      ListHeaderComponentStyle={se.headerBox}
      ListHeaderComponent={
        <Text style={se.headerText}>Animation Learning</Text>
      }
      ListEmptyComponent={
        <View style={{marginBottom: 30}}>
          <View style={se.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Fading')}
              style={se.itemBox}>
              <Text style={se.itemText}>Fading</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    />
  );
};

export default AnimationIndex;

const se = StyleSheet.create({
  all: {flex: 1, paddingTop: getStatusBarHeight(), backgroundColor: 'white'},
  headerText: {fontSize: 30, fontWeight: '800', color: '#5FC1E0'},
  headerBox: {alignItems: 'center', marginBottom: 20},
  itemContainer: {flexDirection: 'row', justifyContent: 'space-evenly'},
  itemBox: {padding: 15, backgroundColor: '#C8F0CA'},
  itemText: {fontSize: 15, fontWeight: '500', color: 'black'},
});
