import React, { FC } from 'react';

import ListCars from '../../components/smart/ListCars';
import Header from '../../components/ordinary/Header';
import { MainContainer } from '../../containers';

const Cars: FC = () => {
  return (
    <MainContainer>
      <Header title={'Список автомобилей'} />
      <ListCars />
    </MainContainer>
  );
};

export default Cars;
