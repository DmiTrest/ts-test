import React, { FC, ReactNode } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

type ButtonProps = {
  children: ReactNode;
  style: ViewStyle;
  onPress?: () => void;
};

const Button: FC<ButtonProps> = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={props.style} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Button;
