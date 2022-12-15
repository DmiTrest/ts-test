import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { isEmpty } from 'lodash';
import Toast from 'react-native-toast-notifications';

import { RootState, useSelector } from '../../core/store';
import { TabContainer } from '../../containers';
import MainWidgetCard from '../../components/ordinary/MainWidgetCard';
import OtherWidgetCard from '../../components/ordinary/OtherWidgetCard';

const Utilities: FC = () => {
  const { data, currentCar } = useSelector((state: RootState) => state.home);
  const [timer, setTimer] = useState(0);
  const toastRef = useRef<Toast>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (+timer === 15) {
      const id = toastRef.current?.show('Обновить', {
        placement: 'bottom',
        swipeEnabled: false,
        duration: 999999999999,
        animationType: 'zoom-in',
        onPress: () => {
          toastRef.current?.hide(String(id)), setTimer(0);
        },
      }); // fetch()
    }
  }, [timer]);

  return useMemo(
    () => (
      <TabContainer>
        <Toast ref={toastRef} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 15 }}>
          {!isEmpty(data) &&
            data[currentCar].widgets.map((item, index) => {
              if (item.type === 'refill' || item.type === 'maintenance') {
                return <MainWidgetCard key={String(index)} {...item} />;
              }
              return <OtherWidgetCard key={String(index)} {...item} />;
            })}
        </View>
      </TabContainer>
    ),
    [currentCar],
  );
};

export default Utilities;
