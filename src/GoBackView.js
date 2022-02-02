import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default GoBackView = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        paddingTop: getStatusBarHeight(),
        paddingBottom: 10,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
        GO BACK
      </Text>
    </TouchableOpacity>
  );
};
