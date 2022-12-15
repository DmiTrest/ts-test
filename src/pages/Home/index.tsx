import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { MainContainer } from '../../containers';
import { NavigationType } from '../../routes';
import MainBanner from '../../components/smart/MainBanner';
import TopTabs from '../../tabs/topTabs';

type HomeProps = {
  navigation: NavigationType;
};

const Home: FC<HomeProps> = props => {
  useFocusEffect(() => {
    StatusBar.setBackgroundColor('#4e555e', true);
    return () => {
      StatusBar.setBackgroundColor('rgb(84,87,92)', true);
    };
  });

  return (
    <MainContainer>
      <MainBanner navigation={props.navigation} />
      <TopTabs />
    </MainContainer>
  );
};

export default Home;
