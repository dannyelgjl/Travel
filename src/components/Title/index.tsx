import React from 'react';
import {ITitleProps} from './types';
import {TitleText} from './styles';

const Title = ({title}: ITitleProps) => {
  return <TitleText>{title}</TitleText>;
};

export default Title;
