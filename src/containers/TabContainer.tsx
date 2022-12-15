import React, { FC, ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';

type TabContainerProps = {
  children: ReactNode;
};

const TabContainer: FC<TabContainerProps> = props => {
  return (
    <BottomTabBarHeightContext.Consumer>
      {tabBarHeight => (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={{ position: 'relative', padding: 12, paddingBottom: tabBarHeight }}>{props.children}</View>
        </ScrollView>
      )}
    </BottomTabBarHeightContext.Consumer>
  );
};

export default TabContainer;
