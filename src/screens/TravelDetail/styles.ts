import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
  background-color: rgb(248, 246, 247);
  padding: ${mvs(14)}px;
`;

export const TitleContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: ${mvs(10)}px;
`;
