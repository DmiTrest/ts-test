import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import { isUndefined } from 'lodash';

import { components } from '../../../core/schemes';
import { timeFormat } from '../../../core/utils/timeFormat';
import { priceFormat } from '../../../core/utils/priceFormat';
import { getImage } from '../../../core/utils/getImage';

import { style } from './styled';

const OtherWidgetCard: FC<components['schemas']['WidgetsType']> = props => {
  return (
    <View style={style.wrapper}>
      <View style={{ position: 'absolute', top: 20, right: 3 }}>
        <Image source={getImage(props.imageUri)} style={{ width: 32, height: 32 }} />
      </View>
      <View style={style.header}>
        <Text style={style.headerTitle}>{props.title.ru}</Text>
        <Text style={style.headerSubtitle}>{props.status.ru}</Text>
      </View>
      <Text style={style.price}>{priceFormat(props.price)}</Text>
      {!isUndefined(props.info) && <Text style={style.info}>{props.info.ru}</Text>}
      {!isUndefined(props.time) && <Text style={style.info}>{timeFormat(props.time)} прошло</Text>}
    </View>
  );
};

export default OtherWidgetCard;
