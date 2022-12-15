import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../pages/Home';
import Cars from '../../pages/Cars';
import Market from '../../pages/Market';
import Services from '../../pages/Services';
import Trips from '../../pages/Trips';
import HomeTabIcon from '../../assets/icons/homeTabIcon.svg';
import CarTabIcon from '../../assets/icons/carTabIcon.svg';
import ServicesTabIcon from '../../assets/icons/servicesTabIcon.svg';
import TripTabIcon from '../../assets/icons/tripTabIcon.svg';
import MarketTabIcon from '../../assets/icons/marketTabIcon.svg';

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#81878f',
  tabBarItemStyle: { height: 70 },
  tabBarStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 90,
    backgroundColor: 'rgba(84,87,92, 0.97)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 0,
  },
  tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => {
    let icon;
    if (route.name === 'Главная') icon = <HomeTabIcon width="24" height="24" stroke={color} />;
    if (route.name === 'Авто') icon = <CarTabIcon width="24" height="24" fill={color} />;
    if (route.name === 'Сервисы') icon = <ServicesTabIcon width="24" height="24" stroke={color} />;
    if (route.name === 'Поездки') icon = <TripTabIcon width="24" height="24" fill={color} />;
    if (route.name === 'Маркет') icon = <MarketTabIcon width="24" height="24" stroke={color} fill={color} />;

    return (
      <View style={{ alignItems: 'center', transform: [{ scale: focused ? 1.1 : 1 }] }}>
        {icon}
        <Text style={{ marginTop: 2, fontSize: 12, color: color }}>{route.name}</Text>
      </View>
    );
  },
});

const BottomTabs = () => {
  return (
    // @ts-ignore
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Главная" component={Home} />
      <Tab.Screen name="Авто" component={Cars} />
      <Tab.Screen name="Сервисы" component={Services} />
      <Tab.Screen name="Поездки" component={Trips} />
      <Tab.Screen name="Маркет" component={Market} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
