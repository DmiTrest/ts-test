import React, { FC, useRef } from 'react';
import { isEmpty } from 'lodash';
import { Animated, Image, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { SIZES } from '../../../core/constants';
import { RootState, useSelector } from '../../../core/store';
import { homeActionCreators } from '../../../core/slices/homeSlice';
import { getImage } from '../../../core/utils/getImage';
import { NavigationType } from '../../../routes';
import LogoIcon from '../../../assets/icons/logoIcon.svg';
import Button from '../../ui/Button';

import { style } from './styled';

type MainBannerProps = {
  navigation: NavigationType;
};

const MainBanner: FC<MainBannerProps> = props => {
  const { data } = useSelector((state: RootState) => state.home);
  const { setCurrentCar } = homeActionCreators();
  const canMomentum = useRef(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideIndex = Animated.divide(scrollX, SIZES.width);

  const onMomentumScrollBegin = () => {
    canMomentum.current = true;
  };

  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (canMomentum.current) {
      const index = Math.round(e.nativeEvent.contentOffset.x / SIZES.width);
      setCurrentCar(index);
    }

    canMomentum.current = false;
  };

  const renderItem = ({ item }) => (
    <Button style={style.slider} onPress={() => props.navigation.navigate('Авто')}>
      <View style={style.sliderWrapper}>
        <View style={style.subscription}>
          <Text style={style.subscriptionText}>Подписка до {item.subscription}</Text>
        </View>
        <Text style={style.nameCar}>{item.nameCar}</Text>
        <Text style={style.numberCar}>{item.numberCar}</Text>
      </View>
    </Button>
  );

  return (
    <LinearGradient colors={['#4e555e', '#383e46']} style={[style.wrapper]}>
      <LogoIcon width={60} height={40} />
      <View style={style.avatar}>
        <Image source={getImage('avatar')} style={style.avatarImg} />
      </View>
      <Animated.FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        decelerationRate={'fast'}
        horizontal
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
      <View style={style.dotWrapper}>
        {!isEmpty(data) &&
          data.map((_, index) => {
            const opacity = slideIndex.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.25, 1, 0.25],
              extrapolate: 'clamp',
            });
            return <Animated.View key={String(index)} style={[{ opacity }, style.dot]} />;
          })}
      </View>
    </LinearGradient>
  );
};

export default MainBanner;
