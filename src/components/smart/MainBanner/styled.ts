import { StyleSheet } from 'react-native';

import { SIZES } from '../../../core/constants';

export const style = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 12,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatar: {
    position: 'absolute',
    padding: 3,
    top: 20,
    right: 12,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 25,
    overflow: 'hidden',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  dotWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dot: {
    marginRight: 4,
    width: 8,
    height: 8,
    backgroundColor: '#eeeeef',
    borderRadius: 50,
  },
  slider: {
    alignItems: 'center',
    width: SIZES.width,
  },
  sliderWrapper: {
    position: 'relative',
    marginTop: 25,
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: '#454b53',
    borderRadius: 50,
  },
  subscription: {
    position: 'absolute',
    top: -12,
    alignSelf: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: '#656b73',
    borderRadius: 50,
  },
  subscriptionText: {
    fontSize: 10,
    color: '#b0b3b8',
  },
  nameCar: {
    fontSize: 22,
    color: '#fff',
    letterSpacing: 1.6,
    textAlign: 'center',
  },
  numberCar: {
    fontSize: 12,
    color: '#747b84',
    textAlign: 'center',
  },
});
