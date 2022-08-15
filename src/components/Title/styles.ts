import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';

export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.orange};
  margin-top: ${mvs(16)}px;
`;
