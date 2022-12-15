import React, { FC } from 'react';
import { NavigationContainer, NavigationProp, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from '../tabs/BottomTabs';
import { useToast } from 'react-native-toast-notifications';

const Stack = createNativeStackNavigator();
const screenOptions = { headerShown: false };

const Routes: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type NavigationType = NavigationProp<ParamListBase>;

export default Routes;
