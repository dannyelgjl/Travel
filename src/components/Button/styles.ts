import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.orange};
  border-radius: 6px;
  width: 100%;
  height: ${mvs(50)}px;
  justify-content: center;
  margin-top: ${mvs(10)}px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
  font-size: 14px;
`;
