import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View} from 'react-native';
import {IHeaderProps} from './types';
import {Container, Logo, ArrowGoBack, Icon} from './styles';

const Header = ({goback}: IHeaderProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      {goback ? (
        <ArrowGoBack onPress={handleGoBack}>
          <Icon />
        </ArrowGoBack>
      ) : (
        <View />
      )}

      <Logo />
    </Container>
  );
};

export default Header;
