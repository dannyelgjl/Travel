import React from 'react';

import {Container, Title} from './styles';

interface IButtonProps {
  title: string;
}

const Button = ({title}: IButtonProps) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
