import React from 'react';
import {View} from 'react-native';

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

interface ICardProps {
  item: {
    id: number;
    hour: string;
    city: string;
    time: string;
    convencional: string;
    value: string;
  };
}

const Card = ({item}: ICardProps) => {
  return (
    <Container>
      <ValueContainer>
        <ValueTitle>R$ {item.value}</ValueTitle>
      </ValueContainer>

      <Content>
        <InforContainer>
          <Hour>{item.hour}</Hour>
          <City>{item.city}</City>
        </InforContainer>
        <TimeTravelContainer>
          <Time>{item.time}</Time>
          <TimeTravel>{'=>'}</TimeTravel>
        </TimeTravelContainer>

        <ArrivalContainer>
          <Arrival>21h30</Arrival>
          <Arrival>{item.convencional}</Arrival>
        </ArrivalContainer>
      </Content>
    </Container>
  );
};

export default Card;
