import React from 'react';
import {Header, Title, Button, Input} from '../../components';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {Container, FormContent} from './styles';
import {RootStackParamsList} from '../../routes';

type HomeScreenProps = StackNavigationProp<RootStackParamsList>;

const Home = () => {
  const navigation = useNavigation<HomeScreenProps>();

  const handleNavigation = () => {
    navigation.navigate('Detail');
  };

  return (
    <>
      <Header />
      <Container>
        <Title title="Compre sua passagem aqui!" />

        <FormContent>
          <Input label="De:" />
          <Input label="Para:" />
          <Input label="Partida:" />
        </FormContent>

        <Button title="Buscar" onPress={handleNavigation} />
      </Container>
    </>
  );
};

export default Home;
