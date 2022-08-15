import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';
import airplaneIcon from '../../assets/icons/airplane.png';

export const Container = styled.View`
  width: 100%;
  height: ${mvs(150)}px;
  background-color: #fff;
  border-radius: ${mvs(8)}px;
  margin-bottom: ${mvs(24)}px;
`;

export const ValueContainer = styled.View`
  background-color: ${({theme}) => theme.colors.orange};
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

export const Uf = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.colors.orange};
`;

export const City = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.colors.orange};
`;

export const TimeTravelContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TimeTravel = styled.Image.attrs({
  source: airplaneIcon,
})`
  width: ${mvs(24)}px;
  height: ${mvs(20)}px;
  margin-top: ${mvs(4)}px;
`;

export const Time = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.colors.orange};
  font-size: 14px;
`;

export const ArrivalContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const Arrival = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.colors.orange};
  font-size: 14px;
`;
