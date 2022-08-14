import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: rgb(248, 246, 247);
`;

export const Title = styled.Text`
  font-size: 30;
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
`;
