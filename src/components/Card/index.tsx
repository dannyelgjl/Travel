import React from 'react';

import {
  Container,
  ValueContainer,
  ValueTitle,
  Content,
  Hour,
  City,
  TimeTravel,
  InforContainer,
  TimeTravelContainer,
  Time,
  Arrival,
  ArrivalContainer,
} from './styles';

const Card = () => {
  return (
    <Container>
      <ValueContainer>
        <ValueTitle>R$ 2.773</ValueTitle>
      </ValueContainer>

      <Content>
        <InforContainer>
          <Hour>20:30</Hour>
          <City>João Pessoa</City>
        </InforContainer>
        <TimeTravelContainer>
          <Time>6h</Time>
          <TimeTravel>{'=>'}</TimeTravel>
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
