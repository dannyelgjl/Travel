import styled from 'styled-components/native';
import logo from '../../assets/logo/travel_logo.png';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.white};
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowGoBack = styled.TouchableOpacity``;

export const Icon = styled.Text`
  font-size: 18px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 115px;
  height: 55px;
`;
