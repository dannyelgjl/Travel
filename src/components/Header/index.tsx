import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View} from 'react-native';
import {Container, Logo, ArrowGoBack, Icon} from './styles';

interface IHeaderProps {
  goback?: boolean;
}

const Header = ({goback}: IHeaderProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      {goback ? (
        <ArrowGoBack onPress={handleGoBack}>
          <Icon>{'<='}</Icon>
        </ArrowGoBack>
      ) : (
        <View />
      )}

      <Logo />
    </Container>
  );
};

export default Header;
