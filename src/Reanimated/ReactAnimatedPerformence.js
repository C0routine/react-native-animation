import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Easing,
  Animated,
} from 'react-native';
import GoBackView from '../GoBackView';

const ReactAnimatedPerformence = ({navigation}) => {
  const [react, setReact] = useState(false);
  const reactValue = useState(new Animated.Value(20))[0];

  const ReactAPI = value => {
    setReact(!react);
    Animated.timing(reactValue, {
      toValue: value,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    const looper = setInterval(() => {
      for (let loop = 0; loop < 20000000; loop++) {}
      console.log('execute');
    }, 1000);
    return () => {
      clearInterval(looper);
    };
  }, []);

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <View style={se.main}>
        <View style={se.touchContainer}>
          <TouchableOpacity
            onPress={() => {
              react
                ? ReactAPI(1)
                : ReactAPI(Math.floor(Dimensions.get('window').width - 30));
            }}
            style={se.touchBox}>
            <Text style={se.touchText}>React API</Text>
          </TouchableOpacity>
        </View>

        <Animated.View
          style={{
            width: reactValue,
            height: 50,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>React Native JS Thread</Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default ReactAnimatedPerformence;

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
