import React, { FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { RootState, useSelector } from '../../../core/store';

import { style } from './styled';

const ListCars: FC = () => {
  const { data } = useSelector((state: RootState) => state.home);

  const renderItem = ({ item }) => (
    <LinearGradient colors={['#ffffff', '#f6fbff']} style={style.wrapper}>
      <View>
        <Text style={style.title}>{item.nameCar}</Text>
        <Text style={style.subtitle}>{item.numberCar}</Text>
      </View>
      <Text style={style.info}>Подписка до {item.subscription}</Text>
    </LinearGradient>
  );

  return <FlatList data={data} keyExtractor={item => String(item.id)} renderItem={renderItem} bounces={false} />;
};

export default ListCars;
