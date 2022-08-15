import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: rgb(248, 246, 247);
  padding: ${mvs(14)}px;
`;

export const FormContent = styled.View`
  width: 100%;
  margin-top: ${mvs(20)}px;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.orange};
  margin-bottom: ${mvs(4)}px;
`;

export const Input = styled.TextInput`
  border: ${mvs(1)}px solid #eee;
  border-radius: ${mvs(6)}px;
  padding: ${mvs(8)}px;
  margin-bottom: ${mvs(20)}px;
  background-color: ${({theme}) => theme.colors.white};
`;
