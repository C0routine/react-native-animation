import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Home = ({navigation}) => {
  return (
    <FlatList
      style={se.all}
      ListHeaderComponentStyle={se.headerBox}
      ListHeaderComponent={
        <Text style={se.headerText}>Animation Learning</Text>
      }
      ListEmptyComponent={
        <>
          <View style={se.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Fading')}
              style={se.itemBox}>
              <Text style={se.itemText}>Fading</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Moving')}
              style={se.itemBox}>
              <Text style={se.itemText}>Moving</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('AnimationPanResponder')}
              style={se.itemBox}>
              <Text style={se.itemText}>PanResponder</Text>
            </TouchableOpacity>
          </View>

          <View style={se.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ReactAnimatedPerformence')}
              style={se.itemBox}>
              <Text style={se.itemText}>ReactNative Animated API Performence</Text>
            </TouchableOpacity>
          </View>

          <View style={se.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ReanimatedBase')}
              style={se.itemBox}>
              <Text style={se.itemText}>Reanimated Base</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ReanimatedGesture')}
              style={se.itemBox}>
              <Text style={se.itemText}>Reanimated Gesture</Text>
            </TouchableOpacity>
          </View>

          <View style={se.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('InterpolateScroll')}
              style={se.itemBox}>
              <Text style={se.itemText}>Interpolate ScrollView</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('InterpolateTheme')}
              style={se.itemBox}>
              <Text style={se.itemText}>Interpolate Theme</Text>
            </TouchableOpacity>
          </View>

          <View style={se.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PinchGestureView')}
              style={se.itemBox}>
              <Text style={se.itemText}>PinchGestureHandler</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DoubleTapLike')}
              style={se.itemBox}>
              <Text style={se.itemText}>DoubleTapLike</Text>
            </TouchableOpacity>
          </View>

          <View style={se.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PanGestureScroll')}
              style={se.itemBox}>
              <Text style={se.itemText}>PanGestureScrollPage</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ColorPicker')}
              style={se.itemBox}>
              <Text style={se.itemText}>ColorPicker</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    />
  );
};

export default Home;

const se = StyleSheet.create({
  all: {flex: 1, paddingTop: getStatusBarHeight(), backgroundColor: 'white'},
  headerText: {fontSize: 30, fontWeight: '800', color: '#5FC1E0'},
  headerBox: {alignItems: 'center', marginBottom: 20},
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  itemBox: {padding: 15, backgroundColor: '#C8F0CA'},
  itemText: {fontSize: 15, fontWeight: '500', color: 'black'},
});
