import React, { FC, ReactNode } from 'react';
import { SafeAreaView } from 'react-native';

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer: FC<MainContainerProps> = props => {
  return <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>{props.children}</SafeAreaView>;
};

export default MainContainer;
