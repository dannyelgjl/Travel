import styled from 'styled-components/native';
import {mvs} from 'react-native-size-matters';
import logo from '../../assets/logo/travel_logo.png';
import arrowLeftIcon from '../../assets/icons/arrow-left.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.white};
  width: 100%;
  padding: 12px;
`;

export const ArrowGoBack = styled.TouchableOpacity``;

export const Icon = styled.Image.attrs({
  source: arrowLeftIcon,
})`
  width: ${mvs(28)}px;
  height: ${mvs(28)}px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: ${mvs(115)}px;
  height: ${mvs(55)}px;
`;
