import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { style } from './styled';

type HeaderType = {
  title: string;
};

const Header: FC<HeaderType> = props => {
  return (
    <View style={style.header}>
      <Text style={style.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;
