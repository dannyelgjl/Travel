import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.orage};
  margin-bottom: ${mvs(4)}px;
`;

export const InputText = styled.TextInput`
  border: ${mvs(1)}px solid #eee;
  border-radius: ${mvs(6)}px;
  padding: ${mvs(8)}px;
  margin-bottom: ${mvs(20)}px;
  background-color: ${({theme}) => theme.colors.white};
`;
