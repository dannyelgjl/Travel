import React from 'react';
import {ICardProps} from './types';
import {
  Container,
  ValueContainer,
  ValueTitle,
  Content,
  Uf,
  City,
  TimeTravel,
  InforContainer,
  TimeTravelContainer,
  Time,
  Arrival,
  ArrivalContainer,
} from './styles';

const Card = ({item}: ICardProps) => {
  return (
    <Container>
      <ValueContainer>
        <ValueTitle>R$ 2.980</ValueTitle>
      </ValueContainer>

      <Content>
        <InforContainer>
          <Uf>{item?.uf}</Uf>
          <City>{item?.localidade}</City>
        </InforContainer>
        <TimeTravelContainer>
          <Time>{item?.time}</Time>
          <TimeTravel />
        </TimeTravelContainer>

        <ArrivalContainer>
          <Arrival>21h30</Arrival>
          <Arrival>Convencional</Arrival>
        </ArrivalContainer>
      </Content>
    </Container>
  );
};

export default Card;
