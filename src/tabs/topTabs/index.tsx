import React from 'react';
import { Animated, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Marketplace from '../../pages/Marketplace';
import Utilities from '../../pages/Utilities';
import Subscription from '../../pages/Subscription';
import { SIZES } from '../../core/constants';

const Tab = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation, position }) {
  const translateX = position.interpolate({
    inputRange: [0, 1],
    outputRange: [0, (SIZES.width - 24) / 3],
  });

  return (
    <View style={{ position: 'relative', flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 12 }}>
      <Animated.View
        style={{
          position: 'absolute',
          left: 12,
          bottom: 0,
          width: (SIZES.width - 24) / 3,
          height: 2.5,
          backgroundColor: '#434950',
          borderRadius: 2.5,
          transform: [{ translateX }],
        }}
      />

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0.4)),
        });

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center' }}>
            <Animated.Text style={{ fontSize: 16, fontWeight: '500', opacity: opacity }}>{label}</Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TopTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name={'Услуги'} component={Utilities} />
      <Tab.Screen name={'Подписка'} component={Subscription} />
      <Tab.Screen name={'Маркетплейс'} component={Marketplace} />
    </Tab.Navigator>
  );
};

export default TopTabs;
