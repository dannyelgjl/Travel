import React from 'react';
import {Header, Title, Button, Input} from '../../components';
import {useNavigation} from '@react-navigation/core';
import {Container, FormContent} from './styles';
import {SCREEN} from '../../routes/constant/route-name';

const Home = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate(SCREEN.DETAIL);
  };

  return (
    <>
      <Header />
      <Container>
        <Title />

        <FormContent>
          <Input label="De:" />
          <Input label="Para:" />
          <Input label="Partida:" />
        </FormContent>

        <Button title="Compre já" onPress={handleNavigation} />
      </Container>
    </>
  );
};

export default Home;
