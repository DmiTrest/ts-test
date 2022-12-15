import { Dimensions, NativeModules } from 'react-native';

const { width, height } = Dimensions.get('window');
const { StatusBarManager } = NativeModules;

export const SIZES = {
  statusBarHeight: StatusBarManager.HEIGHT,
  width,
  height,
};

const appTheme = { SIZES };

export default appTheme;
