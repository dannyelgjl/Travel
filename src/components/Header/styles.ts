import styled from 'styled-components/native';
import logo from '../../assets/logo/travel_logo.png';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  width: 100%;
  padding: 10px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 115px;
  height: 55px;
`;
