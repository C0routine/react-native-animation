import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import GoBackView from './GoBackView';

const AnimationMoving = ({navigation}) => {
  const [row, setRow] = useState(false);
  const [col, setCol] = useState(false);
  const [smooth, setSmooth] = useState(false);
  const moving = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  const movingSmooth = useState(new Animated.Value(0))[0];

  const MoveRow = (valueX, valueY) => {
    Animated.timing(moving, {
      toValue: {x: valueX, y: valueY},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const MoveColumn = (valueX, valueY) => {
    Animated.timing(moving, {
      toValue: {x: valueX, y: valueY},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const MoveSmooth = value => {
    Animated.timing(movingSmooth, {
      toValue: value,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={se.all}>
      <GoBackView navigation={navigation} />
      <View style={se.main}>
        <View style={se.touchContainer}>
          <TouchableOpacity
            onPress={() => {
              row ? MoveRow(0, 0) : MoveRow(150, 0);
              setRow(!row);
            }}
            style={se.touchBox}>
            <Text style={se.touchText}>MoveRow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              col ? MoveColumn(0, 0) : MoveColumn(0, 350);
              setCol(!col);
            }}
            style={se.touchBox}>
            <Text style={se.touchText}>MoveColumn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              smooth ? MoveSmooth(0) : MoveSmooth(350);
              setSmooth(!smooth);
            }}
            style={se.touchBox}>
            <Text style={se.touchText}>MoveColumn Smooth</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Animated.View style={moving.getLayout()}>
            <View style={se.itemBox} />
          </Animated.View>
          <Animated.View
            style={{
              position: 'absolute',
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: 'lightgreen',
              transform: [
                {
                  translateY: movingSmooth,
                },
              ],
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AnimationMoving;

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
  itemBox: {
    backgroundColor: 'red',
    marginVertical: 15,
    borderRadius: 20,
    width: 40,
    height: 40,
  },
});
