import React from 'react';
import {IButtonProps} from './types';
import {Container, Title} from './styles';

const Button = ({title, onPress}: IButtonProps) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
