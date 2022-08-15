import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';

export const Container = styled.View`
  width: 100%;
  height: 150px;
  background-color: #fff;
  border-radius: ${mvs(8)}px;
`;

export const ValueContainer = styled.View`
  background-color: ${({theme}) => theme.colors.orage};
  width: 100%;
  height: 30%;
  border-top-right-radius: ${mvs(8)}px;
  border-top-left-radius: ${mvs(8)}px;
  padding: ${mvs(8)}px;
`;

export const ValueTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.white};
  text-align: center;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: ${mvs(12)}px;
  width: 100%;
`;

export const InforContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const Hour = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
`;

export const City = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
`;

export const TimeTravelContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TimeTravel = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
  font-size: 20px;
`;

export const Time = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
  font-size: 14px;
`;

export const ArrivalContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const Arrival = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
  font-size: 14px;
`;
