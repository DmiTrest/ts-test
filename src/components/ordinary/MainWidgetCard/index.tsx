import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { isEmpty, isUndefined } from 'lodash';
import LinearGradient from 'react-native-linear-gradient';

import { components } from '../../../core/schemes';
import { priceFormat } from '../../../core/utils/priceFormat';
import { timeFormat } from '../../../core/utils/timeFormat';
import { getImage } from '../../../core/utils/getImage';

import { style } from './styled';

const MainWidgetCard: FC<components['schemas']['WidgetsType']> = props => {
  return (
    <LinearGradient colors={props.linearGradientColor} style={style.wrapper}>
      <View style={style.header}>
        <Text style={style.headerTitle}>{props.title.ru}</Text>
        {!isEmpty(props.fuel) && <Text style={style.headerSubtitle}>{props.fuel.ru}</Text>}
      </View>
      <View style={style.status}>
        <View style={style.statusWrapper}>
          <View style={style.statusIndicator}>
            <Text style={style.statusIcon}>!</Text>
          </View>
          {!isEmpty(props.status) && <Text style={style.statusText}>{props.status.ru}</Text>}
        </View>
        {!isUndefined(props.volume) && !isUndefined(props.fullVolume) && (
          <>
            <View style={style.progressBar}>
              <View style={[style.progressBarLine, { width: `${(100 * props.volume) / props.fullVolume}%` }]} />
            </View>
            <Text style={style.statusInfo}>+ {props.volume} Л</Text>
          </>
        )}
        <View style={style.details}>
          <Text numberOfLines={1}>
            {!isUndefined(props.details) &&
              props.details?.map((text, index) => {
                let lastItem = props.details ? props.details?.length - 1 === index : true;
                return (
                  <Text
                    key={String(index)}
                    style={[style.detailsText, { textTransform: index >= 1 ? 'lowercase' : 'none' }]}>
                    {lastItem ? text.ru : text.ru + ', '}
                  </Text>
                );
              })}
          </Text>
        </View>
      </View>
      <View style={style.footer}>
        <View>
          <Text style={style.price}>{priceFormat(props.price)}</Text>
          {!isUndefined(props.time) && <Text style={style.time}>~{timeFormat(props.time)}</Text>}
        </View>
        <View style={style.image}>
          <Image source={getImage(props.imageUri)} style={{ height: 20, width: 20 }} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default MainWidgetCard;
