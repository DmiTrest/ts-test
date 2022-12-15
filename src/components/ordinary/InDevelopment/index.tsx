import React, { FC } from 'react';
import { View, Text } from 'react-native';

const InDevelopment: FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>Страница в разработке</Text>
    </View>
  );
};

export default InDevelopment;
